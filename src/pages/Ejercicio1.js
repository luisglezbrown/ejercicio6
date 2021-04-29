import Card from '../components/Card';

function Ejercicio1() {
  return (
    <div className="App">
      <Card 
        imgSrc='https://www.fujitsu.com/global/imagesgig5/support-manual_tcm100-4750710_tcm100-2750236-32.jpg' date='20 de abril de 2021'
        title='Título de la Card' 
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate esse mollitia ullam commodi quae temporibus ex corrupti ducimus sunt.'
        buttonText='¡Vamos!' 
        buttonLink='http://www.codespaceacademy.com'/>

      <Card 
        imgSrc='https://www.fujitsu.com/global/imagesgig5/support-manual_tcm100-4750710_tcm100-2750236-32.jpg' date='20 de abril de 2021'
        title='Esta es la segunda tarjeta' 
        text='Esto es un texto enviado desde su padre.'
        buttonText='On y va!' 
        buttonLink='http://www.acb.com'/>
    </div>
  );
}

export default Ejercicio1;
