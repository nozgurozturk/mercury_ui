import React, {
    forwardRef,
    memo,
    createRef,
    useEffect,
    useCallback,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useSelect from './useSelect';
import { optionType } from './types';
import Option from './Option';
import { Icon } from '../Icon'
import { Loader } from '../Loader'
import { isSelected } from './lib/isSelected';

// import "../../styles/components/_select.scss"
const SelectSearch = forwardRef(({
    value: defaultValue,
    inputSize,
    status,
    label,
    helperText,
    prefix,
    suffix,
    errorMessage,
    disabled,
    loading,
    placeholder,
    multiple,
    search,
    autoFocus,
    autoComplete,
    options: defaultOptions,
    onChange,
    printOptions,
    closeOnSelect,
    className,
    renderValue,
    renderOption,
    renderGroupHeader,
    getOptions,
    fuse,
}, ref) => {
    const selectRef = createRef();
    const [snapshot, valueProps, optionProps] = useSelect({
        options: defaultOptions,
        value: defaultValue,
        multiple,
        disabled,
        fuse,
        search,
        onChange,
        getOptions,
        closeOnSelect,
        allowEmpty: !!placeholder,
    });

    const {
        focus,
        highlighted,
        value,
        options,
        searching,
        displayValue,
        search: searchValue,
    } = snapshot;

    const cls = useCallback((key) => {
        if (typeof className === 'function') {
            return className(key);
        }

        if (key.indexOf('container') === 0) {
            return key.replace('container', className);
        }

        if (key.indexOf('is-') === 0 || key.indexOf('has-') === 0) {
            return key;
        }

        return `${className.split(' ')[0]}__${key}`;
    }, [className]);

    const wrapperClass = [
        cls('container'),
        (disabled) ? cls('is-disabled') : false,
        (searching) ? cls('is-loading') : false,
        (focus) ? cls('has-focus') : false,
    ].filter((single) => !!single).join(' ');

    const inputValue = (focus && search) ? searchValue : displayValue;

    useEffect(() => {
        const { current } = selectRef;

        if (!current) {
            return;
        }

        let query = null;

        if (highlighted > -1) {
            query = `[data-index="${highlighted}"]`;
        } else if (value && !multiple) {
            query = `[data-value="${escape(value.value)}"]`;
        }

        const selected = current.querySelector(query);

        if (selected) {
            const rect = current.getBoundingClientRect();
            const selectedRect = selected.getBoundingClientRect();

            current.scrollTop = selected.offsetTop - (rect.height / 2) + (selectedRect.height / 2);
        }
    }, [focus, value, highlighted, selectRef, multiple]);

    let shouldRenderOptions;

    switch (printOptions) {
        case 'never':
            shouldRenderOptions = false;
            break;
        case 'always':
            shouldRenderOptions = true;
            break;
        case 'on-focus':
            shouldRenderOptions = focus;
            break;
        default:
            shouldRenderOptions = !disabled && (focus || multiple);
            break;
    }

    const inputClasses = classNames(
        'mrc-select-input',
        (disabled || loading) && 'mrc-input-disabled',
        status && `mrc-${status}`
    )

    const wrapperClasses = classNames(
    'mrc-select-input__wrapper',
    cls('value'),
    inputSize && `mrc-input-${inputSize}`,
    wrapperClass
    )

    return (
        <div ref={ref} className={inputClasses}>
        {label && <label className="mrc-select-input__label">{label}</label>}
        {helperText && <div className="mrc-select-input__helper">{helperText}</div>}
            {((!multiple || placeholder) || search) && (
                <div className={wrapperClasses}>
                    {prefix && <Icon name={prefix} size={24} />}
                    {renderValue(
                        {
                            ...valueProps,
                            placeholder,
                            autoFocus,
                            autoComplete,
                            value: inputValue,
                        },
                        snapshot,
                        cls('input'),
                    )}
                    {suffix && <Icon name={suffix} size={24} />}
                    {status && !loading && <Icon name={status} size={24} />}
                    {loading && <Loader active={loading} size={12} />}
                </div>              
            )}
            {shouldRenderOptions && (
                <div className={cls('select')} ref={selectRef}>
                    <ul className={cls('options')}>
                        {
                        options.length > 0  ? options.map((option) => {
                            if (option.type === 'group') {
                                return (
                                    <li role="none" className={cls('row')} key={option.groupId}>
                                        <div className={cls('group')}>
                                            <div className={cls('group-header')}>{renderGroupHeader(option.name)}</div>
                                            <ul className={cls('options')}>
                                                {option.items.map((o) => (
                                                    <Option
                                                        key={o.value}
                                                        cls={cls}
                                                        optionProps={optionProps}
                                                        selected={isSelected(o, value)}
                                                        highlighted={highlighted === o.index}
                                                        renderOption={renderOption}
                                                        {...o}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                );
                            }

                            return (
                                <Option
                                    key={option.value}
                                    cls={cls}
                                    optionProps={optionProps}
                                    selected={isSelected(option, value)}
                                    highlighted={highlighted === option.index}
                                    renderOption={renderOption}
                                    {...option}
                                />
                            );
                        }) :      
                        <li className="mrc-select__row mrc-select__empty">
                            <button className="mrc-select__option">Empty</button>
                        </li>}
                    </ul>
                </div>
            )}
            {
                status === 'error' && errorMessage &&
                <div className="mrc-field-message">
                    {errorMessage}
                </div>
            }
        </div>
    );
});

SelectSearch.defaultProps = {
    className: 'mrc-select',
    disabled: false,
    label: null,
    prefix: null,
    suffix: null,
    helperText: null,
    errorMessage: null,
    search: false,
    multiple: false,
    placeholder: null,
    autoFocus: false,
    autoComplete: 'on',
    inputSize: 'default',
    status: '',
    value: '',
    onChange: () => { },
    printOptions: 'auto',
    closeOnSelect: true,
    renderOption: (domProps, option, snapshot, className) => (
        // eslint-disable-next-line react/button-has-type
        <button className={className} {...domProps}>
            {option.name}
        </button>
    ),
    renderGroupHeader: (name) => name,
    renderValue: (valueProps, snapshot, className) => (
        <input
            {...valueProps}
            className={className}
        />
    ),
    fuse: {
        keys: ['name', 'groupName'],
        threshold: 0.3,
    },
    getOptions: null,
};

SelectSearch.propTypes = {
    options: PropTypes.arrayOf(optionType).isRequired,
    getOptions: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
    ]),
    size: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
    errorMessage: PropTypes.string,
    helperText: PropTypes.string,
    status: PropTypes.string,
    multiple: PropTypes.bool,
    search: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    printOptions: PropTypes.oneOf(['auto', 'always', 'never', 'on-focus']),
    closeOnSelect: PropTypes.bool,
    renderOption: PropTypes.func,
    renderGroupHeader: PropTypes.func,
    renderValue: PropTypes.func,
    fuse: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            keys: PropTypes.arrayOf(PropTypes.string),
            threshold: PropTypes.number,
        }),
    ]),
};

export default memo(SelectSearch);
