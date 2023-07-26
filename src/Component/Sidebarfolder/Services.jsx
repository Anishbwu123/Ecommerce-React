// import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import ser0 from '../../Image/service1.png'
// import ser1 from '../../Image/service2.png'
// import ser2 from '../../Image/service3.png'
// const imgcall=(img)=>{
//     console.log(img)

//     if(img)
//     {
//         return 'ser'
//     }
//     // else if(img===2)
//     // {
//     //     return ser2
//     // }
//     // else if(img===3)
//     // {
//     //     return ser3
//     // }


// }
// const Services = () => {
//     const data=[{
//         id:'1',username:'anish',description:'Our products our prides',Heading:'PRODUCT WARRANTY',img:'service1.png',
//       },
//       {
//         id:'2',username:'boy',description:'Our Best online shopping app',Heading:'BEST ONLINE PLATFORM',img:'service2.png',
//       },
//       {
//         id:'3',username:'girl',description:'Fastest Delivery',Heading:'ON TIME DELIVERY',img:'service3.png',
//       }
//     ]
//     return (
//         <>
//         <h2 className='text-dark fw-bold text-center font-monospace'><u>Our Services</u></h2>
//         <div className='service-array'>
//             {data && data.map((item)=>
//                 <div className='service-box'>
//                 <Card sx={{ maxWidth: 345 }}>
//                 <CardActionArea>
//                     <CardMedia
//                         component='img'
//                         height="140"
//                         image={ser0}
//                         alt="green iguana"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                            <li style={{color:'black'}}>{item.Heading}</li> 
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             <li style={{color:'black'}}>{item.description}</li>
//                         </Typography>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>
//             </div>
//              )}
//             </div>
//         </>
//     )
// }

// export default Services




import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <h4 className='text-primary text-center'>Services Offered:</h4><br/>
        {/* <Box style={{border:'1px solid black'}}> */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{marginTop:'110px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className='text-info' sx={{ width: '33%', flexShrink: 0 }}>
            Design:
          </Typography>
          <Typography  sx={{ color: 'text.secondary' }}>We Provide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className='text-info' sx={{ width: '33%', flexShrink: 0 }}>Build:</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Built Your own innovation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className='text-info' sx={{ width: '33%', flexShrink: 0 }}>
           Operate:
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           Operate through anywhere
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className='text-info' sx={{ width: '33%', flexShrink: 0 }}>Other Technologies:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* </Box> */}
    </div>
  );
}