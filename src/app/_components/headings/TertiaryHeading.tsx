
type Props = {
  children: React.ReactNode
  slash: boolean
  level: number
  variant?: string
  id?: string
}

export default function TertiaryHeading(props: Props) {

  function getVariant() {
    return props.variant ? props.variant : ""
  }

  return (
    <>
      {props.level === 2 &&
        <h2 className={`c__head_tertiary ${getVariant()}`} id={props.id ? props.id : ""}>
          {props.children}
        </h2>
      }
      {props.level === 3 &&
        <h3 className={`c__head_tertiary ${getVariant()}`} id={props.id ? props.id : ""}>
          {props.children}
        </h3>
      }
    </>
  );
}
