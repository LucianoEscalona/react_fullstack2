const API = "http://localhost:8094"
//----------------------------------------------------------------------
export const saveBDD = async(endpoint, data) => {
    try {
        await fetch(`${API}/${endpoint}`,{
            method: "POST",
            body: data,
        })
        .then((resp)=>{
            if(resp){return true}else{return false}
        })
    } catch (ex) {
        console.log("ERROR: no se pudo guardar, " + ex)
    }
}
//----------------------------------------------------------------------
export const getBDD = async() => {
    try {
        const resp = await fetch(`${API}/pokemones`)
        if(!resp.ok) throw new Error("ERROR: no se pudo recuperar los pokemones")
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log("ERROR: no se pudo recuperar los pokemones")
    }
}
//----------------------------------------------------------------------
export const getByIdBDD = async(num) => {
    try {
        const resp = await fetch(`${API}/pokemonByNumero/${num}`)
        if(!resp.ok) throw new Error("ERROR: no se pudo recuperar los pokemones")
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log("ERROR: no se pudo recuperar los pokemones")
    }
}
//----------------------------------------------------------------------
export const putBDD = async(endpoint, data) => {
    try {
        const resp = fetch(`${API}/update`,{
            method: "PUT",
            body: data
        })
        if (!resp.ok) throw new Error("ERROR: no se pudo actualizar el pokemon")
        const data = resp.json()
        return data
    } catch (ex) {
        console.log("ERROR: no se pudo actualizar el pokemon, " + ex)
    }
}
//----------------------------------------------------------------------
export const deleteBDD = async(num) => {
    try {
        const resp = fetch(`${API}/delete/${num}`,{
            method: "DELETE"
        })
        if (!resp.ok) throw new Error("ERROR: no se pudo eliminar el pokemon")
        return true
    } catch (ex) {
        console.log("ERROR: no se pudo actualizar el pokemon, " + ex)
    }
}
//----------------------------------------------------------------------
export const saveLocalstorage = (key,data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (ex) {
        console.error("Error al guardar: ",ex)
    }
}

export const loadFromLocalstorage = (key) => {
    try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : null
    } catch (ex) {
        console.error("Error al guardar: ",ex)
    }
}

export const deleteFromLocalstorage = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (ex) {
        console.error("Error al guardar: ",ex)
    }
}

//métodos para el carrito (guiño guiño)


//métodos para el login


//métodos para los pokemones