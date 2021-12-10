import Button from "@mui/material/Button";

export default function GlobalButton(props) {
    const {name, variant, onClick, disabled, href, color} = props;
  return <Button variant={variant} onClick={onClick} disabled={disabled} href={href} color={color}>{name}</Button>;
}
