import { useState } from "react";
import "./form.css";
import Modal from "../modal/Modal";
import ActionButton from "../actionButton/ActionButton";
import { getPredict } from "../../utils/fetch";

const Formulario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState({
    nHabitaciones: "",
    nBanos: "",
    superficies: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    const { nHabitaciones, nBanos, superficies } = formData;
    let result = await getPredict(superficies, nHabitaciones, nBanos);;
    console.log(result.prediction);
    result= result.prediction
    result = formatPrediction(result);
    console.log("El resultado formateado es:",result);
    setPrediction(result);
    openModal();
  };
    const formatPrediction = (number) => {
    if (number === null || number === undefined) {
      return '';
    }
    return Number(number).toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

//   console.log(formatPrediction(11123.456789));
  

  return (
    <div className="App">
      <form onSubmit={handlePredict}>
        <div className="inputs_container">
          <img className="logo" src="./public/casa(1).png" alt="Una casa" />
          <label htmlFor="nHabitaciones">Habitaciones</label>
          <input
            type="number"
            name="nHabitaciones"
            placeholder="Nº Hab"
            value={formData.nHabitaciones}
            onChange={handleInputChange}
          />

          <label htmlFor="nBanos">Número de Baños</label>
          <input
            type="number"
            name="nBanos"
            placeholder="Nº Baños"
            value={formData.nBanos}
            onChange={handleInputChange}
          />

          <label htmlFor="superficies">Superficie</label>
          <input
            type="number"
            name="superficies"
            placeholder="m2"
            value={formData.superficies}
            onChange={handleInputChange}
          />

          <ActionButton
            label="Buscar"
            onClick={openModal}
            className="action-button"
          />
        </div>
      </form>

      {isModalOpen && (
        <Modal isOpen={true} onClose={() => setIsModalOpen(false)}>
          <h1>El precio aprox es: {prediction}</h1>
        </Modal>
      )}
    </div>
  );
};

export default Formulario;
