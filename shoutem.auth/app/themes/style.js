import { changeColorAlpha } from '@shoutem/theme';
import { createScopedResolver, resolveFontWeight } from '@shoutem/ui';
import { ext } from '../const';

const resolveVariable = createScopedResolver(ext());

export default () => ({
  'shoutem.auth.AppleSignInButton': {
    appleButton: {
      width: '100%',
      minWidth: 140,
      height: 44,
      margin: 10,
      alignSelf: 'center',
    },
  },

  'shoutem.auth.FacebookButton': {
    facebookButton: {
      width: '100%',
      minWidth: 140,
      height: 44,
      marginVertical: 10,
      borderRadius: 6,
      backgroundColor: '#4267B2',
      alignSelf: 'center',
    },
    facebookButtonIcon: {
      color: '#ffffff',
      width: 16,
      height: 16,
    },
    facebookButtonSpinner: {
      color: '#ffffff',
    },
    facebookButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: resolveFontWeight('600'),
      fontFamily: 'Rubik-Regular',
    },
  },

  'shoutem.auth.HorizontalSeparator': {
    'shoutem.ui.View': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 22,
      'shoutem.ui.View': {
        backgroundColor: '#c5c3c3',
        flex: 5,
        height: 1,
        width: '100%',
      },
      'shoutem.ui.Text': {
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#c5c3c3',
      },
    },
  },

  'shoutem.auth.PasswordTextInput': {
    'shoutem.ui.View': {
      'shoutem.ui.TextInput': {
        borderColor: resolveVariable('text.color'),
        borderRadius: 6,
        height: 50,
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 4,
      },
      'shoutem.ui.Button': {
        position: 'absolute',
        right: 0,
        paddingTop: 13,
        paddingBottom: 13,
      },
    },
  },

  'shoutem.auth.LoginForm': {
    usernameContainer: {
      'shoutem.ui.Text': {
        fontSize: 15,
        paddingBottom: 5,
      },
      'shoutem.ui.TextInput': {
        borderColor: resolveVariable('text.color'),
        borderRadius: 6,
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 4,
      },
    },

    passwordLabelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 5,
      'shoutem.ui.Text': {
        fontSize: 15,
      },
      'shoutem.ui.Button': {
        'shoutem.ui.Text': {
          color: resolveVariable('caption.color'),
          fontSize: 11,
          fontWeight: resolveFontWeight('400'),
          margin: 0,
        },
      },
    },

    loginButton: {
      borderRadius: 6,
      width: '100%',
      minWidth: 140,
      height: 44,
      marginTop: 32,
      marginBottom: 20,
      'shoutem.ui.Text': {
        margin: 0,
        fontSize: 16,
      },
    },
  },

  'shoutem.auth.LoginScreen': {
    loginScreen: {
      paddingHorizontal: 30,
      paddingTop: 40,
    },
  },

  'shoutem.auth.RegisterButton': {
    'shoutem.ui.View': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifySelf: 'flex-end',
      marginTop: 10,
      paddingBottom: 20,
      'shoutem.ui.Caption': {
        lineHeight: 24,
        fontSize: resolveVariable('text.fontSize'),
      },
      'shoutem.ui.Button': {
        paddingLeft: 5,
        'shoutem.ui.Text': {
          lineHeight: 24,
          fontSize: resolveVariable('text.fontSize'),
          margin: 0,
        },
      },
    },
  },

  'shoutem.auth.RegisterForm': {
    'shoutem.ui.View': {
      'shoutem.ui.Text': {
        paddingBottom: 5,
        fontSize: 15,
      },
      'shoutem.ui.TextInput': {
        borderColor: resolveVariable('text.color'),
        borderRadius: 6,
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: 4,
      },
      'shoutem.ui.View': {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        'shoutem.ui.TextInput': {
          borderRadius: 6,
          height: 50,
          flex: 1,
        },
      },
      'shoutem.ui.TouchableOpacity': {
        'shoutem.ui.Caption': {
          color: '#659CEC',
        },
      },
    },
    registerButton: {
      borderRadius: 6,
      width: '100%',
      minWidth: 140,
      height: 44,
      marginTop: 40,
      alignSelf: 'center',
      'shoutem.ui.Text': {
        fontSize: 16,
        margin: 0,
      },
    },
  },

  'shoutem.auth.RegisterScreen': {
    registerScreenMargin: {
      paddingHorizontal: 30,
      paddingTop: 40,
    },
  },

  'shoutem.auth.TermsAndPrivacy': {
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    link: {
      margin: 0,
      fontWeight: resolveFontWeight('700'),
    },
  },

  'shoutem.auth.PasswordRecoveryScreen': {
    textContainer: {
      marginTop: 40,
      marginBottom: 40,
      marginLeft: 30,
      marginRight: 18,
    },
    title: {
      fontSize: 24,
      lineHeight: 32,
    },
    description: {
      marginTop: 12,
      fontSize: 15,
      lineHeight: 24,
    },
    emailInput: {
      borderRadius: 6,
    },
    inputCaption: {
      marginBottom: 3,
      opacity: 0.4,
      fontSize: 15,
      lineHeight: 18,
    },
    confirmButton: {
      width: '50%',
      marginTop: 24,
      borderRadius: 6,
    },
  },

  'shoutem.auth.EditProfileScreen': {
    container: { flex: 1 },
    username: { bottom: 0 },
    deleteAccountButtonText: { color: resolveVariable('errorText.color') },
  },

  'shoutem.auth.ConfirmDeletionScreen': {
    deleteAccountButtonContainer: {
      marginTop: 30,
      height: 55,
    },
    deleteAccountButtonText: {
      disabled: {
        color: changeColorAlpha(resolveVariable('errorText.color'), 0.5),
      },
      enabled: { color: resolveVariable('errorText.color') },
    },
    deleteAccountDescription: { textAlign: 'center' },
    textInput: {
      borderWidth: 0,
      wiggleAnimation: { paddingHorizontal: 0 },
    },
  },

  'shoutem.auth.ChangePasswordScreen': {
    keyboardAvoidingViewContainer: {
      flex: 1,
    },
    textContainer: {
      marginTop: 40,
      marginBottom: 40,
      marginLeft: 30,
      marginRight: 18,
    },
    title: {
      fontSize: 24,
      lineHeight: 32,
    },
    description: {
      marginTop: 12,
      fontSize: 15,
      lineHeight: 24,
    },
    inputCaption: {
      marginBottom: 3,
      opacity: 0.4,
      fontSize: 15,
      lineHeight: 18,
    },
    inputWrapper: {
      marginBottom: 26,
    },
    codeInput: {
      height: 50,
      paddingTop: 4,
      paddingBottom: 4,
      borderRadius: 6,
    },
    confirmButton: {
      width: '50%',
      marginTop: 24,
      marginBottom: 30,
      borderRadius: 6,
    },
  },
});
