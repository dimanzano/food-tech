import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function DrawerItemLayout(props: DrawerItemProps) {
  const { icon, text, onClick } = props;

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        {icon}  
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}

DrawerItemLayout.defaultProps = {
  onClick: () => {}
};

interface DrawerItemProps {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}