
type Props = {
  groupVariant?: string

  variant: string
  slash: boolean
  level: number
  subtitle: React.ReactNode
  children?: React.ReactNode
  [key: string]: any;
}

export default function SecondaryHeadingGroup({ variant, subtitle, slash, level, groupVariant, ...props }: Props) {

  function getVariant(variantArg: string | undefined) {
    return variantArg ? variantArg : ""
  }
  const head = () => {
    if (level === 1) {
      return <h1 className={`c__head_secondary ${getVariant(variant)}`}>{props.children}</h1>
    } else if (level === 2) {
      return <h2 className={`c__head_secondary ${getVariant(variant)}`}>{props.children}</h2>
    } else if (level === 3) {
      return <h3 className={`c__head_secondary ${getVariant(variant)}`}>{props.children}</h3>
    }
  }


  return (
    <>
      <hgroup className={`c__head_group_secondary ${getVariant(groupVariant)}`} {...props}>
        {head()}
        {subtitle && <p className="c__head_description_text">{subtitle}</p>}
      </hgroup>
    </>

  );
}
