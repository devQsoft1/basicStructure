import ActionType from "./Types";

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      // await  axios('http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/login/', {
      //     method: "post",
      //     headers: {
      //       'Content-type': 'Application/json',
      //     },
      //     data: {
      //       email: email,
      //       password: password,
      //     },
      //   })
      //     .then(function (response) {

      //       console.log('-----------------------------------------------')
      //       console.log('response :', response.data?.data)
      //       console.log('-----------------------------------------------')
      //     })
      //     .catch(function (error) {
      //       console.log('=---------<><><>--------------------------=');
      //       console.log(error);
      //       console.log('=---------<><><>--------------------------=');
      //       dispatch({
      //         type: userTypes.SET_ERRORS,
      //         payload: error,
      //       });
      //     });

      await fetch(
        "http://soundnsoulful.alliedtechnologies.co:8000/v1/api/accounts/login/",
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log("=================================", response.data);
          if (response.data.errors) {
            console.log("There is no user with this credentials");
            const error = response.data.errors[0].detail;
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          } else {
            console.log("Yess we are here");
            dispatch({
              type: userTypes.USER_SIGN_IN_SUCCESS,
              payload: true,
            });
            dispatch({
              type: userTypes.SAVE_USER_DATA,
              payload: {
                name:'unknown'
              },
            });
          }
        })
        .catch((err) => {
          console.log("fetch error", err);
          const error = ["These credientials dosn't much !!"];
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: error,
          });
        });

      console.log("From Sign In action");
      // await signInWithEmailAndPassword(auth, email, password)
      //   .then(() => {
      //     dispatch({
      //       type: userTypes.USER_SIGN_IN_SUCCESS,
      //       payload: true,
      //     });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     const error = ["These credientials dosn't much !!"];
      //     dispatch({
      //       type: userTypes.SET_ERRORS,
      //       payload: error,
      //     });
      //   });
    } catch (err) {
      console.log("----------------------", err);
      console.log("Error from catch in login redux actions");
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
    }
  };

// OTHERS
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: userTypes.SET_ERRORS,
    payload: error,
  });
};
