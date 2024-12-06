'use client'
import {useEffect, useState} from 'react'
import SideBar from '@/components/SideBar'
import { collection, getDocs } from 'firebase/firestore';
import appFirebase from '@/firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth{appFirebase};

const HistoryPage = () => {
    const [usuario, setUsuario] = useState(null)
    return (
        <div>
            <SideBar/>
        </div>
    )
}

export default HistoryPage
