function calc() {
        // Lógica Ley de Ohm
        const i = document.getElementById('i_ohm').value;
        const r = document.getElementById('r_ohm').value;
        document.getElementById('res_ohm').innerText = (i && r) ? (i * r).toFixed(2) : 0;

        // Lógica Conversión
        const inch = document.getElementById('inch').value;
        document.getElementById('res_mm').innerText = inch ? (inch * 25.4).toFixed(2) : 0;
    }
