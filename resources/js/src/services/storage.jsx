const KEY_USER = `"[i-Y<'zY9I<}d*gG_,/5OH;+C7}t)N<v)4+PS$}*VZMj"tOvs2ZU%=wc"}&aasbkbsa"`
const KEY_PROD = `"[+C7}t)N<v)4+PS$}*VZMj"tOvs2ZU%=wc"}&ai-Y<'zY9I<}d*gG_,/5OH;"`
const  Key_CAMPAGNE= `"[+C7}t)N<v)4+PS$}*VZMj"tOvs2ZU%=wc"}&ai-Y<'zY9I<}kfldfklsldk"`
/*****User */

export const setUser = (user) =>{
    localStorage.setItem(KEY_USER,JSON.stringify(user));
}

export const getUser = () => {
    const user = localStorage.getItem(KEY_USER)
    return JSON.parse(user)
}

export const deleteUser = () => {
    localStorage.removeItem(KEY_USER)
}

/***Campagne */
export const setCampagne = (campagneList) =>{
    console.log(campagneList)
    localStorage.setItem(Key_CAMPAGNE,JSON.stringify(campagneList));
}

export const getCampagne = () => {
    let campagne = localStorage.getItem(Key_CAMPAGNE)
    campagne = JSON.parse(campagne)
    console.log(campagne)
    return campagne ? campagne : []
}

export const deleteCampagne = () => {
    localStorage.removeItem(Key_CAMPAGNE)
}