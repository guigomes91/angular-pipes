import { Pipe } from '@angular/core';
import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'pipeImpuro',
  pure: false
})
export class PipeImpuroPipe extends FiltroArrayPipe {

}
