import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "8%", flexShrink: 0 }}>01</Typography>
          <Typography sx={{ color: "text.primary" }}>
            Какой состав сока Alatoo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи
            и сок горького арбуза. В свою очередь эти два компонента включают в
            себя множество полезных ферментов, микроэлементов и витаминов, таких
            как органические кислоты, витамин с, витамин b1, витамин d, а также
            фермент папаин.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "8%", flexShrink: 0 }}>02</Typography>
          <Typography sx={{ color: "text.primary" }}>
            Сколько стоит Алатоо и сколько стоит доставка?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи
            и сок горького арбуза. В свою очередь эти два компонента включают в
            себя множество полезных ферментов, микроэлементов и витаминов, таких
            как органические кислоты, витамин с, витамин b1, витамин d, а также
            фермент папаин.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "8%", flexShrink: 0 }}>03</Typography>
          <Typography sx={{ color: "text.primary" }}>
            Здравствуйте, аллергия часто на этот сок?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи
            и сок горького арбуза. В свою очередь эти два компонента включают в
            себя множество полезных ферментов, микроэлементов и витаминов, таких
            как органические кислоты, витамин с, витамин b1, витамин d, а также
            фермент папаин.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "8%", flexShrink: 0 }}>04</Typography>
          <Typography sx={{ color: "text.primary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи
            и сок горького арбуза. В свою очередь эти два компонента включают в
            себя множество полезных ферментов, микроэлементов и витаминов, таких
            как органические кислоты, витамин с, витамин b1, витамин d, а также
            фермент папаин.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "8%", flexShrink: 0 }}>05</Typography>
          <Typography sx={{ color: "text.primary" }}>
            Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи
            и сок горького арбуза. В свою очередь эти два компонента включают в
            себя множество полезных ферментов, микроэлементов и витаминов, таких
            как органические кислоты, витамин с, витамин b1, витамин d, а также
            фермент папаин.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ControlledAccordions;
