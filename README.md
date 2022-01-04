# Equation
Algorithm in nodejs to solve nonlinear equation systems using Newton-Raphson numeric method

**IN TESTING.NEEDS SOME IMPROVEMENTS.***

**TESTED WITH NODEJS v4.4.2**

	git clone https://git.luisvmf.com/Equation

 Solve systems of non linear equations using Newton-Raphson numeric method.
Complex numbers and these functions can be used.

		acsch( )
		acsc( )
		csch( )
		csc( )
		atanh( )
		asec( )
		asinh( )
		atan( )
		acos( )
		asin( )
		sin( )
		cot( )	
		asech( )
		acosh( )
		acsc( )
		sinh( )
		cosh( )
		tanh( )
		cos( )
		tan( )
		sech( )
		sec( )
		acoth( )
		acot( )

		sqrt( )
		log( )               (Natural logarithm)
		log10( ) 

	All the lower case letters of the alphabet except "i" can be used as variables.
	"i" is equal to sqrt(-1).

	Using a^b on one equation means that a is to the power b. 

**EXAMPLES::.**
```bash

		luisvmf@Bieka ~/Desktop/Equationgit/Equation $ node main.js --eq="(x-2)^2-5*x=0"

		{
			'Equation-solution':{
			   {'x':'0.46887000000000006','Yerror':'0'}
			}
			'Processing-info':{
				{'Processing-time':'86ms'},
				{'Numerical-method':'Newton-Raphson'}
			}
		}
		__________________________________________________________________________

		luisvmf@Bieka ~/Desktop/Equationgit/Equation $ node main.js --eq="sin(cos(x))=x^2-3"
		{
			'Equation-solution':{
			   {'x':'1.69578','Yerror':'0'}
			}
			'Processing-info':{
				{'Processing-time':'57ms'},
				{'Numerical-method':'Newton-Raphson'}
			}
		}

		__________________________________________________________________________

		luisvmf@Bieka ~/Desktop/Equationgit/Equation $ node main.js --eq="cos(x)-2*y^2=9*x,3.9*x^3-5*y+z=0,z-3=2*x+a,a-2=0"
		{
			'Equation-solution':{
			   {'a':'2','Yerror':'0'},
			   {'x':'-0.09479000000000001','Yerror':'0'},
			   {'y':'0.96142','Yerror':'0'},
			   {'z':'4.81041','Yerror':'0'}
			}
			'Processing-info':{
				{'Processing-time':'117ms'},
				{'Numerical-method':'Newton-Raphson'}
			}
		}
		__________________________________________________________________________
		luisvmf@Bieka ~/Desktop/Equationgit/Equation $ node main.js --eq="cos(x)-2*y^2=9*x*i,3.9*x^3-5*y+z=0,z-3=2*x+a,a-2=0"
		{
			'Equation-solution':{
			   {'a':'2','Yerror':'0'},
			   {'x':'-0.0183 + 0.10707000000000001i','Yerror':'0'},
			   {'y':'0.9931700000000001 + 0.041960000000000004i','Yerror':'0'},
			   {'z':'4.9634 + 0.21415i','Yerror':'0'}
			}
			'Processing-info':{
				{'Processing-time':'169ms'},
				{'Numerical-method':'Newton-Raphson'}
			}
		}

```
