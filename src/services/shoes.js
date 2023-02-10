import axios from "axios";

const options = {
    url:'https://shoes-collections.p.rapidapi.com/shoes',
    headers: {
        key: '3f8a7bc9efmsh139e44d695e85dbp1d11961jsnde18f2d7b9ba'
    }
};

const getAllShoes = async () => {
    const res = await axios.get(options.url);
    return res.data;
}

export { getAllShoes };