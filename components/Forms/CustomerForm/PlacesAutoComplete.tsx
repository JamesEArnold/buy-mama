/* eslint-disable camelcase */
import {
  DeepMap,
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { FormInput } from '@/components/Forms/GenericForm/FormInput';
import { googlePlacesConfig } from '@/configuration';
import { useLoadScript } from '@react-google-maps/api';
import useOnclickOutside from 'react-cool-onclickoutside';
import usePlacesAutocomplete from 'use-places-autocomplete';

type PlacesProps<T extends Record<string, unknown>> = {
  errors: Partial<DeepMap<T, FieldError>>,
  register?: UseFormRegister<any>,
  rules?: RegisterOptions,
}

const PlacesAutocomplete = <T extends Record<string, unknown>>({
  errors,
  register,
}: PlacesProps<T>) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: { target: { value: string; }; }) => {
    setValue(e.target.value);
  };

  const selectLocationAndClearSuggestions = (description: string) => () => {
    setValue(description, false);
    clearSuggestions();
  };

  const renderSuggestions = () => data.map((suggestion) => {
    const {
      place_id,
      structured_formatting: { main_text, secondary_text },
    } = suggestion;

    return (
      <li key={suggestion.place_id}>
        <button
          type="button"
          key={place_id}
          onClick={selectLocationAndClearSuggestions(suggestion.description)}
        >
          <strong>{main_text}</strong>
          {' '}
          <small>{secondary_text}</small>
        </button>
      </li>
    );
  });

  return (
    <div ref={ref}>
      <FormInput<T>
        id="address"
        type="text"
        label="Address"
        placeholder="Address"
        value={value}
        disabled={!ready}
        errors={errors}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(register && (() => register('address', {})))}
        onChange={handleInput}
        name={'address' as Path<T>}
        className="mb-2"
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

/*
 * Google API does not want the libraries unnessecarily regenerating
 * and wants a const variable that lives outside of the scope of a component.
 *
 * They also don't export the Libraries type, so we need to restrict the string
 * array via the narrowed type.
 */
const libraries: [ 'places' ] = [ 'places' ];

export const Places = <T extends Record<string, unknown>>({
  errors,
  register,
  rules,
}: PlacesProps<T>) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googlePlacesConfig.apiKey,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <PlacesAutocomplete errors={errors} register={register} rules={rules} />;
};
