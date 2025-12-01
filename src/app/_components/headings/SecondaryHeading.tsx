
type Props = {
  children: React.ReactNode
  slash: boolean
  level: number
  variant?: string
}

export default function SecondaryHeading(props: Props) {

  function getVariant() {
    return props.variant ? props.variant : ""
  }

  return (
    <>
      {props.level === 2 &&
        <h2 className={`c__head_secondary ${getVariant()}`}>
          {props.children}
        </h2>
      }
      {props.level === 3 &&
        <h3 className={`c__head_secondary ${getVariant()}`}>
          {props.children}
        </h3>
      }
    </>
  );
}
