import { makeStyles } from "@material-ui/core/styles";
import MaskUp from "../assets/maskup.jpg";


//Replacing inline styling on refactoring
const useStyles = makeStyles({
    root: {
      minWidth: 375,
      maxWidth: '40vw',
      minHeight: "42.5%",
      borderRadius: "50%",
      margin: "3rem 2.5%",
      textAlign: "center",
      backgroundImage: `url(${MaskUp})`,
      backgroundPosition: "left bottom",
      backgroundSize: "50%",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      boxShadow: "0 0 3rem orangered",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    nav: {
      color: "black",
      marginTop: "5rem",
      backgroundColor: "#f8d568",
      padding: "1.5rem",
      width: '30vw',
      minWidth: 360,
      marginBottom: '20px'
      
    },
    addButton: {
      margin: "4rem 2rem",
    },
    cardContent: {
      backgroundColor: "#222",
      opacity: "0.8",
    },
    h2: {
      margin: "6rem 2rem",
      marginBottom: "1rem",
      color: "white",
      textShadow: "0 0 1.5rem orangered",
    },
    h1: {
      fontSize: "3rem",
      padding: "0 5rem",
      color: "white",
      textShadow: "0 0 1.5rem orangered",
    },
    popButton: {
      backgroundColor: "red",
      color: "white",
      marginBottom: "6rem",
      maxWidth: "35%",
      maxHeight: "20%",
      boxShadow: "0 0 1.5rem orangered",
    },
    cardActions: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#222",
      opacity: "0.8",
    },
    appBar: {
        boxShadow: "0 0 1.5rem black",
        backgroundColor: 'orangered',
        color: "white",
        opacity: '0.9'
      }
  });

  export default useStyles