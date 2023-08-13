import { Input, Text } from "./Filter.styled";
export const Filter = ({ onChangeFilter}) => {
    return (
        <>
            <Text>Find contacts by name</Text>
            <Input type="text"  onChange={evt=> onChangeFilter(evt.target.value)} />
        </>
    )
}