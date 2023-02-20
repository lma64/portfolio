export default function validateInfo(values) {
    let errors = {};

    if(!values.email){
        errors.email = "* Email is required"
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = "* Email address is invalid";
    }

    if(!values.password){
        errors.password = "* Password is required";
    } else if (values.password.length < 6) {
        errors.password = "* Password needs to be at least 6 characters";
    }

    if(!values.password2){
        errors.password2 = "* Password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "* Passwords do not match";
    }

    return errors;
}