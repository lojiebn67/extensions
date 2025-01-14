import React, { PureComponent } from 'react';
import {
  Button,
  ButtonToolbar,
  ControlLabel,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import autoBindReact from 'auto-bind/react';
import i18next from 'i18next';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { LoaderContainer, Switch } from '@shoutem/react-web-ui';
import { getExtension, updateExtensionSettings } from '@shoutem/redux-api-sdk';
import LOCALIZATION from './localization';
import './style.scss';

const SETTINGS_KEYS = [
  'androidProductId',
  'iOSProductId',
  'iapHubAppId',
  'iapHubApiKey',
  'iapHubEnvironment',
  'subscriptionRequired',
];

class IAPSettingsPage extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    const { settings } = props.extension;

    const prevSettings = _.pick(settings, SETTINGS_KEYS);
    const newSettings = _.pick(state.settings, SETTINGS_KEYS);

    if (!_.isEqual(prevSettings, newSettings)) {
      return {
        ...state,
        settings: newSettings,
      };
    }

    return state;
  }

  constructor(props) {
    super(props);

    autoBindReact(this);

    const { settings } = props.extension;

    this.state = {
      loading: false,
      settings: _.pick(settings, SETTINGS_KEYS),
    };
  }

  saveEnabled() {
    const {
      loading,
      settings: {
        androidProductId,
        iOSProductId,
        iapHubAppId,
        iapHubApiKey,
        iapHubEnvironment,
      },
    } = this.state;

    const iapHubConfigured =
      !!iapHubAppId && !!iapHubEnvironment && !!iapHubApiKey;

    if (loading || !iapHubConfigured || (!iOSProductId && !androidProductId)) {
      return false;
    }

    const { settings } = this.state;
    const {
      extension: { settings: prevSettings },
    } = this.props;

    return !_.isEqual(
      _.pick(prevSettings, SETTINGS_KEYS),
      _.pick(settings, SETTINGS_KEYS),
    );
  }

  handleTextSettingChange(fieldName) {
    const { settings } = this.state;

    return event => {
      const newText = event.target.value;

      this.setState({ settings: { ...settings, [fieldName]: newText } });
    };
  }

  handleSubscriptionScreenToggle() {
    const { settings } = this.state;

    this.setState({
      settings: {
        ...settings,
        subscriptionRequired: !settings.subscriptionRequired,
      },
    });
  }

  handleSave() {
    const { extension, updateExtensionSettingsAction } = this.props;
    const { settings } = this.state;

    this.setState({ loading: true });

    updateExtensionSettingsAction(extension, settings).finally(() =>
      this.setState({ loading: false }),
    );
  }

  render() {
    const {
      loading,
      settings: {
        iOSProductId,
        androidProductId,
        iapHubAppId,
        iapHubApiKey,
        iapHubEnvironment,
        subscriptionRequired,
      },
    } = this.state;

    const saveEnabled = this.saveEnabled();

    return (
      <div className="chat-settings-page">
        <div className="instructions-container">
          <p className="instructions">
            <Trans i18nKey={LOCALIZATION.SETUP_INSTRUCTIONS}>
              Learn how to properly set up IAP products
              <a
                href="https://shoutem.com/support/in-app-purchases/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </Trans>
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h3>{i18next.t(LOCALIZATION.GENERAL_SETTINGS_TITLE)}</h3>
          <FormGroup className="switch-form-group">
            <ControlLabel>
              {i18next.t(LOCALIZATION.ENABLE_SUBSCRIPTION_SCREEN)}
            </ControlLabel>
            <Switch
              onChange={this.handleSubscriptionScreenToggle}
              value={subscriptionRequired}
            />
          </FormGroup>
          <h3>{i18next.t(LOCALIZATION.STORE_PRODUCTS_TITLE)}</h3>
          <FormGroup>
            <ControlLabel>
              {i18next.t(LOCALIZATION.IOS_PRODUCT_ID)}
            </ControlLabel>
            <FormControl
              className="form-control"
              onChange={this.handleTextSettingChange('iOSProductId')}
              type="text"
              value={iOSProductId}
            />
            <ControlLabel>
              {i18next.t(LOCALIZATION.ANDROD_PRODUCT_ID)}
            </ControlLabel>
            <FormControl
              className="form-control"
              onChange={this.handleTextSettingChange('androidProductId')}
              type="text"
              value={androidProductId}
            />
          </FormGroup>
          <h3>{i18next.t(LOCALIZATION.IAPHUB_SETTINGS_TITLE)}</h3>
          <FormGroup>
            <ControlLabel>{i18next.t(LOCALIZATION.IAPHUB_APP_ID)}</ControlLabel>
            <FormControl
              className="form-control"
              onChange={this.handleTextSettingChange('iapHubAppId')}
              type="text"
              value={iapHubAppId}
            />
            <ControlLabel>
              {i18next.t(LOCALIZATION.IAPHUB_API_KEY)}
            </ControlLabel>
            <FormControl
              className="form-control"
              onChange={this.handleTextSettingChange('iapHubApiKey')}
              type="text"
              value={iapHubApiKey}
            />
            <ControlLabel>
              {i18next.t(LOCALIZATION.IAPHUB_ENVIRONMENT)}
            </ControlLabel>
            <FormControl
              className="form-control"
              onChange={this.handleTextSettingChange('iapHubEnvironment')}
              type="text"
              value={iapHubEnvironment}
            />
          </FormGroup>
        </form>
        <ButtonToolbar>
          <Button
            bsStyle="primary"
            disabled={!saveEnabled}
            onClick={this.handleSave}
          >
            <LoaderContainer isLoading={loading}>
              {i18next.t(LOCALIZATION.SAVE_BUTTON)}
            </LoaderContainer>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

IAPSettingsPage.propTypes = {
  extension: PropTypes.object.isRequired,
  updateExtensionSettingsAction: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { extensionName } = ownProps;
  const extension = getExtension(state, extensionName);

  return {
    extension,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateExtensionSettingsAction: (extension, settings) =>
      dispatch(updateExtensionSettings(extension, settings)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IAPSettingsPage);
