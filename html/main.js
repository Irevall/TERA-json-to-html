function sendRequest(method, url, ) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
}

function miscChange() {
    document.querySelectorAll('.discord').forEach((element, index) => {
        element.addEventListener('click', () => {
            if (element.classList.contains('faded')) {
                sendRequest('PUT', ('/' + document.querySelectorAll('.name')[index].querySelector('span').innerHTML + '/discord/1'));
                element.classList.remove('faded');
                element.alt = 'Has discord';
            } else {
                sendRequest('PUT', ('/' + document.querySelectorAll('.name')[index].querySelector('span').innerHTML + '/discord/0'));
                element.classList.add('faded');
                element.alt = 'No discord';
            }
        });
    });

    document.querySelectorAll('.civil').forEach((element, index) => {
        element.addEventListener('click', () => {
            if (element.classList.contains('faded')) {
                sendRequest('PUT', ('/' + document.querySelectorAll('.name')[index].querySelector('span').innerHTML + '/civil/1'));
                element.classList.remove('faded');
                element.alt = 'Plays civil unrest';
            } else {
                sendRequest('PUT', ('/' + document.querySelectorAll('.name')[index].querySelector('span').innerHTML + '/civil/0'));
                element.classList.add('faded');
                element.alt = 'Doesn\'t play civil unrest';
            }
        });
    });
}

function hiddenElements() {
    document.querySelector('.row').querySelectorAll('div').forEach((element, index) => {
        if (index >= 5 && index <= 11) {
            element.addEventListener('click', () => {
                console.log(index);
                document.querySelectorAll('.row').forEach((element2, index2) => {
                    let target = element2.querySelector('div:nth-child(' + (index + 1) + ')');
                    if (index2 === 0) {
                        return false;
                    } else if (target.querySelector('.content').classList.contains('hidden')) {
                        target.querySelector('.content').classList.remove('hidden');
                        target.querySelector('span').classList.add('hidden');
                    } else {
                        target.querySelector('.content').classList.add('hidden');
                        target.querySelector('span').classList.remove('hidden');
                    }
                });
            })
        }
    });

    document.querySelectorAll('.main').forEach((element, index) => {
       element.querySelector('.arrow').addEventListener('click', () => {
           let corresponding = document.querySelectorAll('.alts')[index];
           if (corresponding.classList.contains('hidden') !== false) {
               corresponding.classList.remove('hidden');
               element.querySelector('.arrow').classList.add('down');
           } else {
               corresponding.classList.add('hidden');
               element.querySelector('.arrow').classList.remove('down');
           }

       });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    miscChange();
    hiddenElements();
});



