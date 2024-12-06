import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/navigation';

const SideBar = ({setCategoria}) => {
    const [options, setOptions] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();
                setOptions(data.categories || []); // Maneja posibles resultados nulos
            } catch (error) {
                console.error('Error al cargar las opciones:', error);
            }
        };
        fetchOptions();
    }, []);

    const handleChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleLogOut = async () => {
        try {
            await signOut(auth);
            console.log("Se cerró con éxito la sesión");
            router.push('/LogIn');
        } catch (e) {
            console.error("Error: no se pudo cerrar sesión", e);
        }
    };

    return (
        <aside className="bg-red-300 h-screen w-[20vw] flex flex-col p-[3%]">
            <Link href={'/Home'}>Home</Link>
            <Link href={'/Home/History'}>History</Link>
            <Link href={'/Home/Account'}>Account</Link>
            <label>Categorias:</label>
            <select onChange={handleChange} defaultValue="">
                <option value="" disabled>
                    Selecciona una categoria
                </option>
                {options.map((option) => (
                    <option key={option.idCategory} value={option.strCategory}>
                        {option.strCategory}
                    </option>
                ))}
            </select>
            <button onClick={handleLogOut}>Cerrar Sesión</button>
        </aside>
    );
};

export default SideBar;
