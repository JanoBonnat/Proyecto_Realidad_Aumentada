export const signInGoogle = async => {
    try {
        await GoogleSignin.hasPlayServices();
        const result = await GoogleSignin.signIn();
        return authEvents.GoogleAuthProvider.credential(result.idToken);
    } catch (error: any){
        console.log(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED){
            console.log('SIGN_IN_CANCELLED');
        } else {
            console.log('ERROR in sign in: ', error);
        }
    }
}