import {RowItems, Title} from './styledComponents'
import './index.css'

const checkSelected = event => {
  console.log('selected: ', event.target.id)
}

const SideBarRow = props => {
  const {selected, Icon, title} = props

  return (
    // <RowItems onClick={checkSelected} className={`${selected && 'selected'}`}>
    <RowItems className={`${selected}`} id={title} onClick={checkSelected}>
      {/* <Icon color={`${selected ? 'red' : 'grey'}`} />
       */}
      <Icon color="grey" className="mb-2" />
      <Title>{title}</Title>
    </RowItems>
  )
}

export default SideBarRow
