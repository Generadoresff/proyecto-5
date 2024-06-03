$(document).ready(function () {
    $('.portfolio-item a img').on('click', function () {
        console.log('asd');
        $(this).toggleClass('border-active');
    });

    $('#generate').on('click', function () {
        let id = $('#insert-your-id').val();
        let quantityDiamonds = $('#diamonds').val();

        switch (true) {
            case id === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar tu ID para continuar...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            case quantityDiamonds === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar la cantidad de diamantes',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            default:
                Swal.fire({
                    title: "ID: " + id,
                    html: "Su pedido llegará a su cuenta en: 5 minutos.<br>Cantidad de diamantes: " + quantityDiamonds + "<br>Donación #: 15019",
                    type: "success",
                    footer: 'Ezequiel',
                    showConfirmButton: false
                });
        }
    })

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    
});