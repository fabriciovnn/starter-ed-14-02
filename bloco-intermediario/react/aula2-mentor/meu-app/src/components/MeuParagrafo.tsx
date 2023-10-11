interface MeuParagrafoParametro {
  texto?: string;
}

function MeuParagrafo(prop: MeuParagrafoParametro) {
  return (
    <p>{prop.texto ?? 'mussum Ipsum cacilds'}</p>
  );
}

export default MeuParagrafo