(function() {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
       
        return true;
      },
      uiShown: function() {
      
        document.getElementById("loader").style.display = "none";
      }
    },
    
    signInFlow: "popup",
    signInSuccessUrl: "./dashboard/main_pages.html",
    signInOptions: [
      
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    
    tosUrl: "./dashboard/main_pages.html",
    
    privacyPolicyUrl: "<your-privacy-policy-url>"
  };
  ui.start("#firebaseui-auth-container", uiConfig);
})();
