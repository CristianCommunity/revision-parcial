const formNuevaReserva = document.queryselector('#formNuevaReserva')

formNuevaReserva.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const nombre = document.queryselector('#nombre').value;
    const apellido = document.queryselector('#apellido').value;
    const fecha_ingreso = document.queryselector('#fecha_ingreso').value;
    const fecha_salida = document.queryselector('#fecha_salida').value;
    const habitación = document.queryselector('#habitacion').value;
    const cantidad_personas = document.queryselector('#cantidad_personas').value;
    const telefono = document.queryselector('#telefono').value;
    const email = document.queryselector('#email').value;

    const nuevaReserva = {
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitación,
        cantidad_personas,
        telefono, 
        email
       }

    const response = await fetch ('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify(nuevaReserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    });

    const { message } = await response.json()

    alert(data.message)
    window.location.href = "/"


})