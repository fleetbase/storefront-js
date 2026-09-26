import { countries } from 'countries-list';

export function getCountries(_country: string | number | null = null) {
    const _countries = Object.values(countries);
    const _codes = Object.keys(countries);
    const _list = [];

    for (let i = 0; i < _countries.length; i++) {
        const country = _countries[i];

        _list.push({
            ...country,
            iso2: _codes[i],
        });
    }

    _list.sort((a, b) => a.name.localeCompare(b.name));

    if (_country !== null) {
        return _list.find((c) => c.iso2 === _country || parseInt(String(c.phone)) === parseInt(String(_country)));
    }

    return _list;
}

export default getCountries;
