/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import TextInput from './TextInput'

export default class TextControl extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        onChange: PropTypes.func.isRequired,
        help: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value
    }

    render() {
        const { id, label, value, onChange, help, disabled } = this.props

        return (
            <div className="Control">
                <div className="TextControl">
                    <label className="control_label" htmlFor={id}>
                        {label}
                    </label>
                    <TextInput
                        id={id}
                        className={classNames('control-text', {
                            '_is-disabled': disabled === true,
                        })}
                        value={value}
                        onChange={onChange}
                        disabled={disabled === true}
                    />
                </div>
                {/*<div className="control-help">{help}</div>*/}
            </div>
        )
    }
}
