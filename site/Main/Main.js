document.addEventListener('click', __on_click);


function __on_click(event) {
    if (!event.target.classList.contains('led_control')) return;

    let status = !(event.target.getAttribute('_active') == 'true');
    event.target.setAttribute('_active', status);

    _toggle_led(event.target, status);
}

async function _toggle_led(led, status) {
    let parent = led.parentElement.children;
    let led_name = parent[0] == led ? 'green' : 'red';

    let response = await fetch(`https://iocontrol.ru/api/sendData/alisA15/led_${led_name}/${+status}`);
}



// let button_on = document.querySelector('#on');
// let button_off = document.querySelector('#off');

// button_on.addEventListener('click', () => led_toggle(1));
// button_off.addEventListener('click', () => led_toggle(0));


// async function led_toggle(value) {
//     let response = await fetch(`https://iocontrol.ru/api/sendData/alisA15/led_green/${+value}`, {
//       headers: {
//         'Access-Control-Allow-Origin': '*'
//       }
//     });

//     let result = await response.json();
// }
