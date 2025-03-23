import * as React from 'react';
import { NumberField } from '@base-ui-components/react/number-field';
import styles from './NumberInput.module.css';
import PlusIcon from '../../../assets/svg/plus.svg?react'
import MinusIcon from '../../../assets/svg/minus.svg?react'

function ExampleNumberField() {
  const id = React.useId();
  return (
    <NumberField.Root id={id} defaultValue={1} className={styles.Field}>
      <NumberField.Group className={styles.Group}>
        <NumberField.Decrement className={styles.Decrement}>
          <MinusIcon />
        </NumberField.Decrement>
        <NumberField.Input className={styles.Input} />
        <NumberField.Increment className={styles.Increment}>
          <PlusIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}

export default ExampleNumberField