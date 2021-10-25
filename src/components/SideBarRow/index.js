import {RowItems, Title} from './styledComponents'
import './index.css'

const checkSelected = event => {
  console.log('selected: ', event.target)
}

const SideBarRow = props => {
  const {selected, Icon, title} = props

  return (
    <RowItems onClick={checkSelected} className={`${selected && 'selected'}`}>
      <Icon color={`${selected ? 'red' : 'grey'}`} />
      <Title>{title}</Title>
    </RowItems>
  )
}

export default SideBarRow
