import React from 'react';

class Curriculo extends React.Component {
  downloadCurriculo = () => {
    const link = document.createElement('a');
    link.href = '../assets/Alefy de Sousa Xavier.pdf';
    link.download = '../assets/Alefy de Sousa Xavier.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
    <section className='mt-10'>
      <button className='btn' onClick={this.downloadCurriculo}>
        Baixar Currículo
      </button>
    </section>
    );
  }
}

export default Curriculo;
