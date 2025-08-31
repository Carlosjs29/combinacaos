
    function normalizar(str){
      return str
        .toLowerCase()
        .normalize('NFD')              // separa acentos
        .replace(/[\u0300-\u036f]/g,'')// remove acentos
        .trim();
    }

    function verificar() {
      const n1 = normalizar(document.getElementById('nome1').value);
      const n2 = normalizar(document.getElementById('nome2').value);
      const out = document.getElementById('resultado');

      if (n1 === 'fabiana' && n2 === 'carlos') {
        out.textContent = 'uma bahiana com molho e um sergipano beiçudo combinam pra caralho❤️';
      } else {
        out.textContent = 'sem graca';
      }
    }

    document.getElementById('verificar').addEventListener('click', verificar);

    // Permite enviar com Enter em qualquer campo
    ['nome1','nome2'].forEach(id=>{
      document.getElementById(id).addEventListener('keydown', e=>{
        if(e.key === 'Enter'){ verificar(); }
      });
    });
