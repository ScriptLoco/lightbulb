function switch_button (val) {
    if (val == 'off') {
        document.getElementById('sb_on').style.display = 'block';
        document.getElementById('sb_off').style.display = 'none';
        document.getElementById('lightbulb-off').style.display = 'none';
        document.getElementById('lightbulb-on').style.display = 'block';
        document.getElementById('light').style.display = 'block';
        document.getElementById('bodi').style.backgroundColor = 'transparent';
    } else if (val == 'on') {
        document.getElementById('sb_on').style.display = 'none';
        document.getElementById('sb_off').style.display = 'block';
        document.getElementById('lightbulb-off').style.display = 'block';
        document.getElementById('lightbulb-on').style.display = 'none';
        document.getElementById('light').style.display = 'none';
        document.getElementById('bodi').style.backgroundColor = '#3c3c3c';
    }
}