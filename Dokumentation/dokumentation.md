# Svendeprøve
#### Navn: Mike Kyed Jespersen
#### Klasse: WU07
#### Uddannelse: Webudvikler


# tech stack:
For min svendeprøve har jeg valgt følgende stacks:

- React


### libraries:


- React Icons
- TailwindCSS
- Axios
- React-Router-Dom
- Framer Motion
- React Use Cookie

# Landrup Dans
en mobil app, hvor man kan se forskellige aktiviteter og tilmelde sig til dem.

# React
React er et frontend framework som bygges på bruger interfaces baseret på komponenter.
## hvorfor valgte jeg det?

jeg valgte det fordi det er nemt at bruge og komme i gang med og elsker at opdele kode stykker i komponenter, hvilke gør det mere overskueligt. React er populært og har et rigtig venlig community. 

# React icons
Et bibliotek med massere af ikoner og nemt at bruge.

## hvorfor valgte jeg det?
Jeg valgte det, da det har et stort udvalg af ikoner og det nemt at bruge.

# Tailwind
et bilbiotek der gør CSS meget nemmere

## hvorfor valgte jeg det?
Jeg valgte Tailwind fordi det at bare at kunne give dine elementer klasser med predifinerede CSS (og selv definere dine egne) er meget nemmere i følge min mening i stedet for at skifte frem og tilbage i dine filer kan være lidt af en hovedepine. Det veldokumenteret og er kompatibelt.

# Axios
Et bibliotek der gør at fetche data fra API'er nemmere

## hvorfor valgte jeg det?
Jeg valgte det fordi det gør det nemmere at fetche data frem for at først man skal konverter data til json, så gør den det for en.

# React-Router-Dom
Et værktøj som gør det lidt bedre for bruger oplevelsen 

## hvorfor valgte jeg det?
Jeg valgte det fordi man kan skifte views(sider) lidt bedre frem for man skal re-render siden, hvilke gør det lidt mere flydende for brugeren.

# Framer-motion
Et værktøj som gør design virkelig lækkert.

## hvorfor valgte jeg det?
Jeg valgte det, da det kan gør din side en tand endnu mere lækkert med animationer og fordi en som er virkelig dårlig med design og komme med ideer til designs så kan det lige gør det lidt nemmere ;)

# react-use-cookie
et værktøj / hook der til formål arbejder med cookies.

## hvorfor valgte jeg det?
Jeg valgte det, da jeg har arbejdet med det før og gør det nemmere for mig at arbejde med cookies.


# kode eksempel

``` 
export default function TokenProvider({ children }) {
	const [token, setToken] = useState(null)
	
	useEffect(function() {
		if (!token) {
			const tokenObject = getCookie("user-cookie")
			if (tokenObject) {
				setToken(JSON.parse(tokenObject))
			}
		}
	}, [token])

	return <TokenContext.Provider value={{token, setToken}}>
		{children}
	</TokenContext.Provider>
}
```
dette stykke kode er et React komponent der laver et context objekt og en provider for at arbejde med token states. `tokenContext`  er lavet via `createContext` Api'et som passer tokens value og en funktion sætter tokens value til child komponenter der kan bruge det.

`useEffect` hook'et tjekker om token value er `null` og hvis det er, tjekker den om der er en cookie med navnet `user-cookie` via `getCookie` funktionen fra `react-use-cookie`. hvis der så er en cookie bliver den taget og sat via `setToken` funktionen.

`tokencontext.Provider` returneres med en `value` prop og `setToken` funktion. Den her komponent wrapper alle child komponenter der skal bruge
Token stadiet.  `children` proppet er passed som et `child` komponent til provideren, hvilke gør det muligt at bruge token til alle `child` komponenter der skal bruge det.