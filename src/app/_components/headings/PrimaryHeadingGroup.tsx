
type Props = {
  variant: string
  groupVariant?: string
  // slash: boolean
  subtitle: React.ReactNode
  level: number
  children?: React.ReactNode
  [key: string]: any;
}

export default function PrimaryHeadingGroup({ variant, subtitle, ...props }: Props) {

  function getVariant(variantArg: string | undefined) {
    return variantArg ? variantArg : ""
  }

  const head = () => {
    if (props.level === 1) {
      return <h1 className={`c__head_primary ${getVariant(variant)}`}>{props.children}</h1>
    } else if (props.level === 2) {
      return <h2 className={`c__head_primary ${getVariant(variant)}`}>{props.children}</h2>
    } else if (props.level === 3) {
      return <h3 className={`c__head_primary ${getVariant(variant)}`}>{props.children}</h3>
    }
  }

  return (
    <hgroup className={`c__head_group_primary ${getVariant(props.groupVariant)}`} {...props}>
      {head()}
      {subtitle && <p className="c__head_description_text">{subtitle}</p>}
    </hgroup>
  );
}
