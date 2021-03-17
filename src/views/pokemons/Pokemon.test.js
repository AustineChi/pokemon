import { render } from '@testing-library/react';
import Pokemons from './index';

describe('<Pokemons/>', () => {
  it('Renders without crashing', () => {
    render(<Pokemons/>)
})
});