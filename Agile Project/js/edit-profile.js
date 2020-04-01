function func() {
    var btnFirstName = document.getElementById('btnfirstname');
    var btnLastName = document.getElementById('btnlastname');
    var btnEmail = document.getElementById('btnemail');
    var btnAddress = document.getElementById('btnaddress');
    var btnUsername = document.getElementById('btnusername');

    var source = event.target || event.srcElement;

    if (source == btnFirstName) {
        $("input[name='firstname']").prop("disabled", false);
    } else if (source == btnLastName) {
        $("input[name='lastname']").prop("disabled", false);
    } else if (source == btnEmail) {
        $("input[name='email']").prop("disabled", false);
    } else if (source == btnAddress) {
        $("input[name='address']").prop("disabled", false);
    } else if (source == btnUsername) {
        $("input[name='username']").prop("disabled", false);
    }
}