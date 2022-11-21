import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MaterialTable, { MTableToolbar } from 'material-table'
const Clints = () => {
  
 return (
    <div>
        <Card sx={{ maxWidth: 1000, textAlign: 'left',  fontSize: 16, display: 'inline',m: 2  }}>
            <div sx = {{m: 2}} >
            <Badge badgeContent={3} color="primary">
                <Typography gutterBottom variant="h4" component="div" sx = {{m: 2}}>
                Clint List
                </Typography>
          </Badge>
            <Typography gutterBottom variant="p" component="div" sx = {{m: 2}}>
            View, add, edit and delete your client's details. Learn more
            </Typography>
            </div>
      
         <Card sx={{ maxWidth: 845 }}>
 
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        Set up your Fresha profile for clients to book online
        </Typography>
   
        <Typography gutterBottom variant="p" component="div" sx = {{m: 2}}>
        Free up time and get your clients self-booking online 24/7.
        </Typography>
   
      </CardContent>
      <CardActions>
      <Button variant="outlined" size="medium">
          Start
        </Button>
      </CardActions>
         </Card>
        
        </Card>
        
    </div>
 );

}

export default Clints ;