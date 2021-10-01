import React from 'react';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
    const category = 'Black Clover';

    test('Debe de mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = { category } />);

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes userFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });

        const wrapper = shallow(<GifGrid category = { category } />);

        expect(wrapper).toMatchSnapshot();
    });
});