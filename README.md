# Compartir información entre componenentes en Angular
Este proyecto demuestra cómo compartir información entre componentes en Angular utilizando dos enfoques diferentes: **Observables** y **Signals**.

## Formas de compartir información entre componentes
Existen varias formas de compartir información entre componentes en Angular:

**1. Inputs/Outputs**
- **Descripción**: se utilizan para pasar datos de un componente padre a un hijo y viceversa.
- **Problema**: cuando es necesario compartir datos entre componentes lejanos en la jerarquía, es necesario encadenar múltiples inputs y outputs, lo que complica el mantenimiento.

**2. Servicios (con Propiedades y Métodos)**
- **Descripción**: un servicio contiene una propiedad y dos métodos (getter y setter) para compartir datos.
- **Problema**: los componentes no tienen una forma reactiva de detectar cambios en la información.

**3. Observables (RxJS)**
- **Descripción**: los **Observables** proporcionan una forma reactiva de compartir información entre componentes.
- **Ventaja**: Los cambios en los datos se reflejan automáticamente en los componentes suscritos.
- **Implementación**: Se utiliza un `BehaviorSubject` para emitir cambios y el `AsyncPipe` para la suscripción automática.

**4. Signals (Angular Signals)**
- **Descripción**: los **Signals** son una alternativa más moderna y reactiva a los Observables.
- **Ventaja**: no requieren suscripción ni pipes adicionales, ya que actualizan automáticamente la vista al cambiar los datos.

## Conclusión
Este proyecto demuestra cómo compartir información entre componentes usando **Observables** y **Signals**. Los **Observables** siguen siendo útiles para manejar flujos de datos complejos, pero los **Signals** ofrecen una sintaxis más simple y reactiva, eliminando la necesidad de pipes adicionales para la suscripción.