export const API_ROOT = "https://ozone.ucsd.edu:5000"
export const GOOGLE_CLIENTID = "416753074929-nja2oi71hrlics4osb8vut7voqhrnlmu.apps.googleusercontent.com"
export const POINT_TAGS = [{"tag":"alarm"},{"tag":"air_flow_loss_alarm"},{"tag":"change_filter_alarm"},{"tag":"low_humidity_alarm"},{"tag":"low_humidity_alarm_setpoint"},{"tag":"high_humidity_alarm"},{"tag":"high_humidity_alarm_setpoint"},{"tag":"emergency_generator_alarm"},{"tag":"liquid_detected_alarm"},{"tag":"low_temperature_alarm"},{"tag":"return_air_temperature_low_limit_alarm"},{"tag":"low_temperature_alarm_setpoint"},{"tag":"humidifier_alarm"},{"tag":"humidifier_panel_no_water_alarm"},{"tag":"failure_alarm"},{"tag":"chiller_failure_alarm"},{"tag":"fume_hood_alarm"},{"tag":"di_water_alarm"},{"tag":"high_head_pressure_alarm"},{"tag":"high_temperature_alarm"},{"tag":"supply_air_temperature_high_limit_alarm"},{"tag":"discharge_air_temperature_high_limit_alarm"},{"tag":"high_temperature_alarm_setpoint"},{"tag":"return_air_temperature_high_limit_alarm"},{"tag":"fan_overload_alarm"},{"tag":"power_loss_alarm"},{"tag":"emergency_power_loss_alarm"},{"tag":"condensate_leak_alarm"},{"tag":"temperature_alarm"},{"tag":"chiller_discharge_water_temperature_alarm"},{"tag":"chiller_supply_water_temperature_alarm"},{"tag":"unit_failed_alarm"},{"tag":"compressor_overload_alarm"},{"tag":"vfd_alarm"},{"tag":"smoke_detected_alarm"},{"tag":"discharge_air_smoke_detected_alarm"},{"tag":"supply_air_smoke_detected_alarm"},{"tag":"co2_high_alarm"},{"tag":"maintenance_required_alarm"},{"tag":"short_cycle_alarm"},{"tag":"pump_alarm"},{"tag":"pump_alarm_delay_setpoint"},{"tag":"chilled_water_pump_alarm_delay_setpoint"},{"tag":"hot_water_pump_alarm"},{"tag":"communication_loss_alarm"},{"tag":"water_loss_alarm"},{"tag":"deionised_water_alarm"},{"tag":"low_suction_pressure_alarm"},{"tag":"luminance_alarm"},{"tag":"command"},{"tag":"start_stop_command"},{"tag":"domestic_hot_water_system_start_stop_command"},{"tag":"motor_start_stop_command"},{"tag":"exhaust_fan_start_stop_command"},{"tag":"supply_fan_start_stop_command"},{"tag":"booster_fan_start_stop_command"},{"tag":"heat_exchanger_start_stop_command"},{"tag":"return_fan_start_stop_command"},{"tag":"pump_start_stop_command"},{"tag":"chilled_water_pump_start_stop_command"},{"tag":"hot_water_pump_start_stop_command"},{"tag":"discharge_fan_start_stop_command"},{"tag":"enable_command"},{"tag":"vfd_enable_command"},{"tag":"system_enable_command"},{"tag":"chilled_water_system_enable_command"},{"tag":"exhaust_fan_system_enable_command"},{"tag":"hot_water_system_enable_command"},{"tag":"domestic_hot_water_system_enable_command"},{"tag":"run_enable_command"},{"tag":"exhaust_fan_enable_command"},{"tag":"fire_control_panel_command"},{"tag":"fire_control_panel_on_command"},{"tag":"exhaust_fan_fire_control_panel_on_command"},{"tag":"fire_control_panel_off_command"},{"tag":"exhaust_fan_fire_control_panel_off_command"},{"tag":"emergency_air_flow_command"},{"tag":"shutdown_command"},{"tag":"shutdown_hot_water_when_unoccupied_command"},{"tag":"system_shutdown_command"},{"tag":"reset_command"},{"tag":"fault_reset_command"},{"tag":"speed_reset_command"},{"tag":"fan_speed_reset_command"},{"tag":"filter_reset_command"},{"tag":"occupied_command"},{"tag":"direction_command"},{"tag":"motor_direction_command"},{"tag":"run_direction_command"},{"tag":"booster_command"},{"tag":"booster_fan_command"},{"tag":"valve_command"},{"tag":"preheat_valve_command"},{"tag":"return_air_preheat_valve_command"},{"tag":"reheat_valve_command"},{"tag":"return_heat_valve_command"},{"tag":"chilled_water_bypass_valve_command"},{"tag":"hot_water_valve_command"},{"tag":"domestic_hot_water_valve_command"},{"tag":"heat_exchanger_valve_command"},{"tag":"cooling_valve_command"},{"tag":"heating_valve_command"},{"tag":"perimeter_heating_valve_command"},{"tag":"override_command"},{"tag":"curtailment_override_command"},{"tag":"frequency_command"},{"tag":"max_frequency_command"},{"tag":"vfd_speed_command"},{"tag":"supply_fan_vfd_speed_command"},{"tag":"exhaust_fan_vfd_speed_command"},{"tag":"chilled_water_pump_vfd_speed_command"},{"tag":"return_fan_vfd_speed_command"},{"tag":"hot_water_pump_vfd_speed_command"},{"tag":"discharge_fan_vfd_speed_command"},{"tag":"mode_command"},{"tag":"maintenance_mode_command"},{"tag":"automatic_mode_command"},{"tag":"box_mode_command"},{"tag":"humidify_command"},{"tag":"heating_command"},{"tag":"emergency_power_off_command"},{"tag":"emergency_power_off_switch_command"},{"tag":"luminance_command"},{"tag":"fan_command"},{"tag":"supply_fan_command"},{"tag":"exhaust_fan_command"},{"tag":"exhaust_fan_disable_command"},{"tag":"discharge_fan_command"},{"tag":"return_fan_command"},{"tag":"supply_air_flow_command"},{"tag":"occupancy_command"},{"tag":"cooling_command"},{"tag":"highest_zone_cooling_command"},{"tag":"request_command"},{"tag":"run_request_command"},{"tag":"run_command"},{"tag":"fans_stage_command"},{"tag":"building_exhaust_fans_stage_command"},{"tag":"vfd_command"},{"tag":"panel_lockout_command"},{"tag":"on_off_command"},{"tag":"steam_on_off_command"},{"tag":"discharge_air_flow_command"},{"tag":"disable_command"},{"tag":"damper_command"},{"tag":"mixed_air_damper_position_command"},{"tag":"exhaust_bypass_damper_command"},{"tag":"outside_air_damper_position_command"},{"tag":"economizer_damper_command"},{"tag":"load_shed_command"},{"tag":"unoccupied_load_shed_command"},{"tag":"zone_unoccupied_load_shed_command"},{"tag":"chilled_water_differential_pressure_load_shed_command"},{"tag":"standby_load_shed_command"},{"tag":"zone_standby_load_shed_command"},{"tag":"pump_command"},{"tag":"pump_lead_on_off_command"},{"tag":"chilled_water_pump_command"},{"tag":"chilled_water_pump_lead_lag_command"},{"tag":"pump_lead_lag_command"},{"tag":"hot_water_pump_lead_lag_command"},{"tag":"meter"},{"tag":"water_meter"},{"tag":"hot_water_meter"},{"tag":"hot_water_flow_meter"},{"tag":"chilled_water_meter"},{"tag":"power_meter"},{"tag":"motor_power_meter"},{"tag":"thermal_power_meter"},{"tag":"heating_thermal_power_meter"},{"tag":"cooling_thermal_power_meter"},{"tag":"electrical_power_meter"},{"tag":"gas_meter"},{"tag":"energy_meter"},{"tag":"peak_energy_today_meter"},{"tag":"steam_usage_meter"},{"tag":"steam_usage_today_meter"},{"tag":"current_steam_usage_meter"},{"tag":"monthly_steam_usage_meter"},{"tag":"yearly_steam_usage_meter"},{"tag":"flow_meter"},{"tag":"sensor"},{"tag":"luminance_sensor"},{"tag":"outside_luminance_sensor"},{"tag":"conductivity_sensor"},{"tag":"deionised_water_conductivity_sensor"},{"tag":"trace_heat_sensor"},{"tag":"water_level_sensor"},{"tag":"deionised_water_level_sensor"},{"tag":"di_water_level_sensor"},{"tag":"frost_sensor"},{"tag":"running_hour_sensor"},{"tag":"piezoelectric_sensor"},{"tag":"supply_fan_piezoelectric_sensor"},{"tag":"discharge_fan_piezoelectric_sensor"},{"tag":"exhaust_fan_piezoelectric_sensor"},{"tag":"run_time_sensor"},{"tag":"direction_sensor"},{"tag":"wind_direction_sensor"},{"tag":"motion_sensor"},{"tag":"pir_sensor"},{"tag":"hail_sensor"},{"tag":"current_sensor"},{"tag":"motor_current_sensor"},{"tag":"pv_current_output_sensor"},{"tag":"photovoltaic_current_output_sensor"},{"tag":"load_current_sensor"},{"tag":"humidity_sensor"},{"tag":"outside_air_humidity_sensor"},{"tag":"relative_humidity_sensor"},{"tag":"exhaust_air_humidity_sensor"},{"tag":"supply_air_humidity_sensor"},{"tag":"zone_humidity_sensor"},{"tag":"discharge_air_humidity_sensor"},{"tag":"return_air_humidity_sensor"},{"tag":"damper_position_sensor"},{"tag":"mixed_air_damper_position_sensor"},{"tag":"bypass_damper_position_sensor"},{"tag":"fume_hood_sash_position_sensor"},{"tag":"outside_air_damper_position_sensor"},{"tag":"air_grains_sensor"},{"tag":"outside_air_grains_sensor"},{"tag":"return_air_grains_sensor"},{"tag":"energy_sensor"},{"tag":"rain_sensor"},{"tag":"rain_duration_sensor"},{"tag":"vfd_speed_sensor"},{"tag":"return_fan_vfd_speed_sensor"},{"tag":"supply_fan_vfd_speed_sensor"},{"tag":"discharge_fan_vfd_speed_sensor"},{"tag":"dewpoint_sensor"},{"tag":"return_air_dewpoint_sensor"},{"tag":"outside_air_dewpoint_sensor"},{"tag":"temperature_sensor"},{"tag":"environment_box_temperature_sensor"},{"tag":"return_air_temperature_sensor"},{"tag":"water_discharge_temperature_sensor"},{"tag":"hot_water_discharge_temperature_sensor"},{"tag":"high_temperature_hot_water_discharge_temperature_sensor"},{"tag":"medium_temperature_hot_water_discharge_temperature_sensor"},{"tag":"domestic_hot_water_discharge_temperature_sensor"},{"tag":"chilled_water_discharge_temperature_sensor"},{"tag":"heat_exchanger_discharge_water_temperature_sensor"},{"tag":"freezer_temperature_sensor"},{"tag":"supply_air_temperature_sensor"},{"tag":"heat_wheel_supply_air_temperature_sensor"},{"tag":"cooling_coil_supply_air_temperature_sensor"},{"tag":"preheat_supply_air_temperature_sensor"},{"tag":"condensor_temperature_sensor"},{"tag":"exhaust_air_temperature_sensor"},{"tag":"water_supply_temperature_sensor"},{"tag":"chilled_water_supply_temperature_sensor"},{"tag":"heat_exchanger_supply_water_temperature_sensor"},{"tag":"medium_temperature_water_supply_temperature_sensor"},{"tag":"medium_temperature_hot_water_supply_temperature_sensor"},{"tag":"hot_water_supply_temperature_sensor"},{"tag":"domestic_hot_water_supply_temperature_sensor"},{"tag":"high_temperature_hot_water_supply_temperature_sensor"},{"tag":"zone_temperature_sensor"},{"tag":"lowest_zone_temperature_sensor"},{"tag":"average_zone_temperature_sensor"},{"tag":"coldest_zone_temperature_sensor"},{"tag":"highest_zone_temperature_sensor"},{"tag":"warmest_zone_temperature_sensor"},{"tag":"zone_air_temperature_sensor"},{"tag":"underfloor_temperature_sensor"},{"tag":"drive_temperature_sensor"},{"tag":"crac_temperature_sensor"},{"tag":"supply_water_temperature_sensor"},{"tag":"room_temperature_sensor"},{"tag":"outside_air_temperature_sensor"},{"tag":"outside_air_lockout_temperature_differential_sensor"},{"tag":"low_outside_air_temperature_enable_differential_sensor"},{"tag":"return_water_temperature_sensor"},{"tag":"chilled_water_return_temperature_sensor"},{"tag":"hot_water_return_temperature_sensor"},{"tag":"medium_temperature_hot_water_return_temperature_sensor"},{"tag":"high_temperature_hot_water_return_temperature_sensor"},{"tag":"medium_temperature_water_return_temperature_sensor"},{"tag":"discharge_air_temperature_sensor"},{"tag":"heat_wheel_discharge_air_temperature_sensor"},{"tag":"cooling_coil_discharge_air_temperature_sensor"},{"tag":"preheat_discharge_air_temperature_sensor"},{"tag":"entering_water_temperature_sensor"},{"tag":"preheat_coil_entering_air_temperature_sensor"},{"tag":"ice_tank_entering_water_temperature_sensor"},{"tag":"hot_water_coil_entering_temperature_sensor"},{"tag":"mixed_air_temperature_sensor"},{"tag":"cold_box_temperature_sensor"},{"tag":"differential_temperature_sensor"},{"tag":"medium_temperature_hot_water_differential_pressure_sensor"},{"tag":"chilled_water_temperature_differential_sensor"},{"tag":"hot_box_temperature_sensor"},{"tag":"leaving_water_temperature_sensor"},{"tag":"ice_tank_leaving_water_temperature_sensor"},{"tag":"preheat_coil_leaving_water_temperature_sensor"},{"tag":"flow_sensor"},{"tag":"water_flow_sensor"},{"tag":"supply_water_flow_sensor"},{"tag":"chilled_water_discharge_flow_sensor"},{"tag":"chilled_water_supply_flow_sensor"},{"tag":"air_flow_sensor"},{"tag":"bypass_air_flow_sensor"},{"tag":"discharge_air_flow_sensor"},{"tag":"average_supply_air_flow_sensor"},{"tag":"average_discharge_air_flow_sensor"},{"tag":"discharge_fan_air_flow_sensor"},{"tag":"fan_air_flow_sensor"},{"tag":"return_fan_air_flow_sensor"},{"tag":"booster_fan_air_flow_sensor"},{"tag":"supply_fan_air_flow_sensor"},{"tag":"return_air_flow_sensor"},{"tag":"exhaust_air_flow_sensor"},{"tag":"exhaust_air_stack_flow_sensor"},{"tag":"outside_air_flow_sensor"},{"tag":"fume_hood_air_flow_sensor"},{"tag":"supply_air_flow_sensor"},{"tag":"supply_air_flow_demand_sensor"},{"tag":"speed_sensor"},{"tag":"motor_speed_sensor"},{"tag":"wind_speed_sensor"},{"tag":"differential_speed_sensor"},{"tag":"heat_wheel_speed_sensor"},{"tag":"return_fan_differential_speed_sensor"},{"tag":"torque_sensor"},{"tag":"motor_torque_sensor"},{"tag":"voltage_sensor"},{"tag":"output_voltage_sensor"},{"tag":"heat_wheel_voltage_sensor"},{"tag":"dc_bus_voltage_sensor"},{"tag":"battery_voltage_sensor"},{"tag":"co2_sensor"},{"tag":"outside_air_co2_sensor"},{"tag":"co2_differential_sensor"},{"tag":"return_air_co2_sensor"},{"tag":"co2_level_sensor"},{"tag":"angle_sensor"},{"tag":"solar_zenith_angle_sensor"},{"tag":"solar_azimuth_angle_sensor"},{"tag":"solar_radiance_sensor"},{"tag":"warm_cool_adjust_sensor"},{"tag":"enthalpy_sensor"},{"tag":"return_air_enthalpy_sensor"},{"tag":"outside_enthalpy_sensor"},{"tag":"outside_air_enthalpy_sensor"},{"tag":"timer_sensor"},{"tag":"on_timer_sensor"},{"tag":"capacity_sensor"},{"tag":"frequency_sensor"},{"tag":"output_frequency_sensor"},{"tag":"occupancy_sensor"},{"tag":"thermostat_adjust_sensor"},{"tag":"pressure_sensor"},{"tag":"velocity_pressure_sensor"},{"tag":"exhaust_air_velocity_pressure_sensor"},{"tag":"supply_air_velocity_pressure_sensor"},{"tag":"discharge_air_velocity_pressure_sensor"},{"tag":"cooling_coil_valve_pressure_sensor"},{"tag":"differential_pressure_sensor"},{"tag":"chilled_water_differential_pressure_sensor"},{"tag":"hot_water_differential_pressure_sensor"},{"tag":"heat_wheel_differential_pressure_sensor"},{"tag":"filter_differential_pressure_sensor"},{"tag":"static_pressure_sensor"},{"tag":"supply_air_static_pressure_sensor"},{"tag":"building_static_pressure_sensor"},{"tag":"discharge_air_static_pressure_sensor"},{"tag":"exhaust_air_static_pressure_sensor"},{"tag":"average_exhaust_air_static_pressure_sensor"},{"tag":"lowest_exhaust_air_static_pressure_sensor"},{"tag":"valve_pressure_sensor"},{"tag":"chilled_valve_pressure_sensor"},{"tag":"status"},{"tag":"smoke_damper_status"},{"tag":"overridden_status"},{"tag":"overridden_off_status"},{"tag":"exhaust_fan_overridden_off_status"},{"tag":"overridden_on_status"},{"tag":"exhaust_fan_overridden_on_status"},{"tag":"pressure_status"},{"tag":"discharge_air_duct_pressure_status"},{"tag":"supply_air_duct_pressure_status"},{"tag":"fire_control_panel_led_status"},{"tag":"start_stop_status"},{"tag":"pump_start_stop_status"},{"tag":"chilled_water_pump_start_stop_status"},{"tag":"fan_start_stop_status"},{"tag":"discharge_fan_start_stop_status"},{"tag":"exhaust_fan_start_stop_status"},{"tag":"supply_fan_start_stop_status"},{"tag":"return_fan_start_stop_status"},{"tag":"pump_status"},{"tag":"chilled_water_pump_status"},{"tag":"chilled_water_pump_enable_status"},{"tag":"chilled_water_pump_lead_lag_status"},{"tag":"hot_water_pump_status"},{"tag":"pump_flow_status"},{"tag":"pump_enable_status"},{"tag":"run_status"},{"tag":"run_direction_status"},{"tag":"fan_run_request_status"},{"tag":"run_enable_status"},{"tag":"motor_start_stop_status"},{"tag":"turn_off_status"},{"tag":"valve_status"},{"tag":"heat_exchanger_valve_status"},{"tag":"fault_status"},{"tag":"humidifier_fault_status"},{"tag":"fault_indicator_status"},{"tag":"last_fault_code_status"},{"tag":"vfd_speed_status"},{"tag":"discharge_fan_vfd_speed_status"},{"tag":"supply_fan_vfd_speed_status"},{"tag":"return_fan_vfd_speed_status"},{"tag":"hand_auto_status"},{"tag":"freeze_status"},{"tag":"filter_status"},{"tag":"pre_filter_status"},{"tag":"pump_lead_lag_status"},{"tag":"stages_status"},{"tag":"mode_status"},{"tag":"system_mode_status"},{"tag":"vav_box_operating_mode_status"},{"tag":"economizer_status"},{"tag":"economizer_mode_status"},{"tag":"vent_operating_mode_status"},{"tag":"occupied_mode_status"},{"tag":"emergency_push_button_status"},{"tag":"occupancy_status"},{"tag":"temporary_occupancy_status"},{"tag":"on_off_status"},{"tag":"remotely_on_off_status"},{"tag":"humidification_on_off_status"},{"tag":"standby_unit_on_off_status"},{"tag":"cooling_on_off_status"},{"tag":"heating_on_off_status"},{"tag":"dehumidification_on_off_status"},{"tag":"econcycle_on_off_status"},{"tag":"locally_on_off_status"},{"tag":"enable_status"},{"tag":"heat_exchanger_system_enable_status"},{"tag":"system_status"},{"tag":"system_shutdown_status"},{"tag":"emergency_power_off_activated_by_leak_detection_system_status"},{"tag":"emergency_power_off_system_enable_status"},{"tag":"manual_auto_status"},{"tag":"vfd_status"},{"tag":"emergency_generator_status"},{"tag":"even_month_status"},{"tag":"load_shed_status"},{"tag":"medium_temperature_water_discharge_temperature_load_shed_status"},{"tag":"medium_temperature_hot_water_discharge_temperature_load_shed_status"},{"tag":"differential_pressure_load_shed_status"},{"tag":"chilled_water_differential_pressure_load_shed_status"},{"tag":"chilled_water_differential_pressure_load_shed_reset_status"},{"tag":"medium_temperature_hot_water_supply_temperature_load_shed_status"},{"tag":"medium_temperature_hot_water_differential_pressure_load_shed_status"},{"tag":"medium_temperature_hot_water_differential_pressure_load_shed_reset_status"},{"tag":"direction_status"},{"tag":"motor_direction_status"},{"tag":"hold_status"},{"tag":"disable_status"},{"tag":"exhaust_fan_disable_status"},{"tag":"fan_status"},{"tag":"discharge_fan_status"},{"tag":"exhaust_fan_status"},{"tag":"standby_fan_status"},{"tag":"supply_fan_status"},{"tag":"return_fan_status"},{"tag":"emergency_air_flow_status"},{"tag":"drive_ready_status"},{"tag":"emergency_power_off_status"},{"tag":"emergency_power_off_activated_by_high_temperature_status"},{"tag":"emergency_power_off_enable_status"},{"tag":"setpoint"},{"tag":"damper_position_setpoint"},{"tag":"outside_air_damper_close_limit_setpoint"},{"tag":"outside_air_damper_min_position_setpoint"},{"tag":"discharge_air_damper_max_position_setpoint"},{"tag":"economizer_damper_min_position_setpoint"},{"tag":"supply_air_damper_max_position_setpoint"},{"tag":"deceleration_time_setpoint"},{"tag":"dead_band_setpoint"},{"tag":"discharge_air_cooling_dead_band_setpoint"},{"tag":"cooling_discharge_air_temperature_dead_band_setpoint"},{"tag":"exhaust_air_flow_dead_band_setpoint"},{"tag":"exhaust_air_stack_flow_dead_band_setpoint"},{"tag":"economizer_discharge_air_temperature_dead_band_setpoint"},{"tag":"discharge_air_heating_dead_band_setpoint"},{"tag":"heating_discharge_air_temperature_dead_band_setpoint"},{"tag":"supply_water_temperature_dead_band_setpoint"},{"tag":"heat_exchanger_discharge_water_temperature_dead_band_setpoint"},{"tag":"heat_exchanger_supply_water_temperature_dead_band_setpoint"},{"tag":"chilled_water_differential_pressure_dead_band_setpoint"},{"tag":"chilled_water_pump_differential_pressure_dead_band_setpoint"},{"tag":"supply_water_differential_pressure_dead_band_setpoint"},{"tag":"thermal_energy_storage_supply_water_differential_pressure_dead_band_setpoint"},{"tag":"thermal_energy_storage_discharge_water_differential_pressure_dead_band_setpoint"},{"tag":"cooling_supply_air_temperature_dead_band_setpoint"},{"tag":"static_pressure_dead_band_setpoint"},{"tag":"exhaust_air_static_pressure_dead_band_setpoint"},{"tag":"discharge_air_static_pressure_dead_band_setpoint"},{"tag":"supply_air_static_pressure_dead_band_setpoint"},{"tag":"economizer_supply_air_temperature_dead_band_setpoint"},{"tag":"zone_heating_temperature_dead_band_setpoint"},{"tag":"occupied_heating_temperature_dead_band_setpoint"},{"tag":"differential_pressure_dead_band_setpoint"},{"tag":"hot_water_differential_pressure_dead_band_setpoint"},{"tag":"heating_supply_air_temperature_dead_band_setpoint"},{"tag":"dehumidification_dead_band_setpoint"},{"tag":"zone_cooling_temperature_dead_band_setpoint"},{"tag":"occupied_cooling_temperature_dead_band_setpoint"},{"tag":"integral_gain_setpoint"},{"tag":"tolerance_setpoint"},{"tag":"temperature_tolerance_setpoint"},{"tag":"humidity_tolerance_setpoint"},{"tag":"proportional_band_setpoint"},{"tag":"supply_air_static_pressure_proportional_band_setpoint"},{"tag":"cooling_supply_air_temperature_proportional_band_setpoint"},{"tag":"differential_pressure_proportional_band_setpoint"},{"tag":"discharge_air_heating_proportional_band_setpoint"},{"tag":"heating_discharge_air_temperature_proportional_band_setpoint"},{"tag":"exhaust_air_flow_proportional_band_setpoint"},{"tag":"exhaust_air_stack_flow_proportional_band_setpoint"},{"tag":"static_pressure_proportional_band_setpoint"},{"tag":"exhaust_air_static_pressure_proportional_band_setpoint"},{"tag":"discharge_air_cooling_proportional_band_setpoint"},{"tag":"cooling_discharge_air_temperature_proportional_band_setpoint"},{"tag":"supply_water_differential_pressure_proportional_band_setpoint"},{"tag":"thermal_energy_storage_supply_water_differential_pressure_proportional_band_setpoint"},{"tag":"thermal_energy_storage_discharge_water_differential_pressure_proportional_band_setpoint"},{"tag":"differential_water_pressure_proportional_band_setpoint"},{"tag":"hot_water_differential_pressure_proportional_band_setpoint"},{"tag":"chilled_water_differential_pressure_proportional_band_setpoint"},{"tag":"chilled_water_pump_differential_pressure_proportional_band_setpoint"},{"tag":"heating_supply_air_temperature_proportional_band_setpoint"},{"tag":"supply_water_temperature_proportional_band_setpoint"},{"tag":"heat_exchanger_supply_water_temperature_proportional_band_setpoint"},{"tag":"heat_exchanger_discharge_water_temperature_proportional_band_setpoint"},{"tag":"economizer_supply_air_temperature_proportional_band_setpoint"},{"tag":"discharge_air_static_pressure_proportional_band_setpoint"},{"tag":"economizer_discharge_air_temperature_proportional_band_setpoint"},{"tag":"dehumidification_proportional_band_setpoint"},{"tag":"rated_speed_setpoint"},{"tag":"humidity_setpoint"},{"tag":"high_humidity_alarm_setpoint"},{"tag":"low_humidity_alarm_setpoint"},{"tag":"current_limit_setpoint"},{"tag":"enthalpy_setpoint"},{"tag":"economizer_enthalpy_setpoint"},{"tag":"economizer_enable_fixed_enthalpy_setpoint"},{"tag":"economizer_disable_fixed_enthalpy_setpoint"},{"tag":"economizer_enable_differential_enthalpy_setpoint"},{"tag":"economizer_disable_differential_enthalpy_setpoint"},{"tag":"temperature_setpoint"},{"tag":"low_outside_air_temperature_disable_setpoint"},{"tag":"low_outside_air_temperature_disable_differential_setpoint"},{"tag":"room_temperature_setpoint"},{"tag":"discharge_air_temperature_setpoint"},{"tag":"discharge_air_temperature_reset_low_setpoint"},{"tag":"discharge_air_temperature_reset_differential_setpoint"},{"tag":"max_discharge_air_temperature_setpoint"},{"tag":"discharge_air_temperature_high_limit_setpoint"},{"tag":"discharge_air_temperature_heating_setpoint"},{"tag":"heating_discharge_air_temperature_integral_time_setpoint"},{"tag":"discharge_air_temperature_reset_high_setpoint"},{"tag":"discharge_air_temperature_increase_decrease_step_setpoint"},{"tag":"discharge_air_temperature_cooling_setpoint"},{"tag":"cooling_discharge_air_temperature_integral_time_setpoint"},{"tag":"min_discharge_air_temperature_setpoint"},{"tag":"open_heating_valve_outside_air_temperature_setpoint"},{"tag":"chilled_water_differential_temperature_setpoint"},{"tag":"mixed_air_temperature_setpoint"},{"tag":"zone_temperature_setpoint"},{"tag":"zone_cooling_temperature_setpoint"},{"tag":"zone_heating_temperature_setpoint"},{"tag":"zone_temperature_high_setpoint"},{"tag":"zone_temperature_low_setpoint"},{"tag":"cooling_temperature_setpoint"},{"tag":"occupied_cooling_temperature_setpoint"},{"tag":"current_cooling_setpoint"},{"tag":"auto_cooling_temperature_setpoint"},{"tag":"effective_cooling_temperature_setpoint"},{"tag":"unoccupied_cooling_temperature_setpoint"},{"tag":"supply_water_temperature_setpoint"},{"tag":"hot_water_supply_temperature_setpoint"},{"tag":"domestic_hot_water_discharge_temperature_setpoint"},{"tag":"domestic_hot_water_supply_temperature_setpoint"},{"tag":"heat_exchanger_supply_water_temperature_setpoint"},{"tag":"heat_exchanger_supply_water_temperature_integral_time_setpoint"},{"tag":"load_shed_supply_water_temperature_setpoint"},{"tag":"medium_temperature_hot_water_discharge_temperature_load_shed_setpoint"},{"tag":"medium_temperature_hot_water_supply_temperature_load_shed_setpoint"},{"tag":"heat_exchanger_discharge_water_temperature_setpoint"},{"tag":"heat_exchanger_discharge_water_temperature_integral_time_setpoint"},{"tag":"outside_air_lockout_temperature_setpoint"},{"tag":"medium_temperature_hot_water_differential_pressure_load_shed_setpoint"},{"tag":"supply_air_temperature_setpoint"},{"tag":"supply_air_temperature_reset_high_setpoint"},{"tag":"supply_air_temperature_reset_differential_setpoint"},{"tag":"supply_air_temperature_reset_low_setpoint"},{"tag":"supply_air_temperature_high_limit_setpoint"},{"tag":"min_supply_air_temperature_setpoint"},{"tag":"supply_air_temperature_increase_decrease_step_setpoint"},{"tag":"max_supply_air_temperature_setpoint"},{"tag":"supply_air_temperature_cooling_setpoint"},{"tag":"cooling_supply_air_temperature_integral_time_setpoint"},{"tag":"supply_air_temperature_heating_setpoint"},{"tag":"heating_supply_air_temperature_integral_time_setpoint"},{"tag":"temperature_low_limit_setpoint"},{"tag":"thumbwheel_temperature_low_limit_setpoint"},{"tag":"freeze_protect_temperature_low_limit_setpoint"},{"tag":"temperature_high_limit_setpoint"},{"tag":"thumbwheel_temperature_high_limit_setpoint"},{"tag":"heating_temperature_setpoint"},{"tag":"effective_heating_temperature_setpoint"},{"tag":"unoccupied_heating_temperature_setpoint"},{"tag":"occupied_heating_temperature_setpoint"},{"tag":"low_temperature_alarm_setpoint"},{"tag":"disable_hot_water_system_outside_air_temperature_setpoint"},{"tag":"high_temperature_alarm_setpoint"},{"tag":"discharge_water_temperature_setpoint"},{"tag":"medium_temperature_hot_water_discharge_temperature_low_reset_setpoint"},{"tag":"medium_temperature_hot_water_discharge_temperature_high_reset_setpoint"},{"tag":"economizer_temperature_setpoint"},{"tag":"economizer_enable_differential_temperature_setpoint"},{"tag":"economizer_differential_air_temperature_setpoint"},{"tag":"economizer_disable_fixed_temperature_setpoint"},{"tag":"economizer_disable_differential_temperature_setpoint"},{"tag":"economizer_enable_fixed_temperature_setpoint"},{"tag":"enable_hot_water_system_outside_air_temperature_setpoint"},{"tag":"schedule_temperature_setpoint"},{"tag":"min_fresh_air_setpoint"},{"tag":"pressure_setpoint"},{"tag":"velocity_pressure_setpoint"},{"tag":"differential_pressure_setpoint"},{"tag":"load_shed_differential_pressure_setpoint"},{"tag":"chilled_water_differential_pressure_load_shed_setpoint"},{"tag":"hot_water_differential_pressure_setpoint"},{"tag":"hot_water_differential_pressure_integral_time_setpoint"},{"tag":"chilled_water_differential_pressure_setpoint"},{"tag":"chilled_water_differential_pressure_integral_time_setpoint"},{"tag":"chilled_water_pump_differential_pressure_integral_time_setpoint"},{"tag":"max_chilled_water_differential_pressure_setpoint"},{"tag":"min_chilled_water_differential_pressure_setpoint"},{"tag":"chilled_water_differential_pressure_increase_decrease_step_setpoint"},{"tag":"average_exhaust_air_pressure_setpoint"},{"tag":"average_exhaust_air_static_pressure_setpoint"},{"tag":"static_pressure_setpoint"},{"tag":"exhaust_air_static_pressure_setpoint"},{"tag":"exhaust_air_static_pressure_integral_time_setpoint"},{"tag":"building_static_pressure_setpoint"},{"tag":"supply_air_static_pressure_setpoint"},{"tag":"supply_air_static_pressure_increase_decrease_step_setpoint"},{"tag":"supply_air_static_pressure_integral_time_setpoint"},{"tag":"max_supply_air_static_pressure_setpoint"},{"tag":"min_supply_air_static_pressure_setpoint"},{"tag":"hot_water_static_pressure_setpoint"},{"tag":"high_static_pressure_cutout_limit_setpoint"},{"tag":"static_pressure_max_setpoint"},{"tag":"max_discharge_air_static_pressure_setpoint"},{"tag":"discharge_air_static_pressure_setpoint"},{"tag":"discharge_air_static_pressure_increase_decrease_step_setpoint"},{"tag":"min_discharge_air_static_pressure_setpoint"},{"tag":"discharge_air_static_pressure_integral_time_setpoint"},{"tag":"chilled_water_static_pressure_setpoint"},{"tag":"static_pressure_min_setpoint"},{"tag":"alarm_delay_setpoint"},{"tag":"pump_alarm_delay_setpoint"},{"tag":"chilled_water_pump_alarm_delay_setpoint"},{"tag":"integral_time_setpoint"},{"tag":"discharge_air_cooling_integral_time_setpoint"},{"tag":"differential_pressure_integral_time_setpoint"},{"tag":"supply_water_temperature_integral_time_setpoint"},{"tag":"supply_water_differential_pressure_integral_time_setpoint"},{"tag":"thermal_energy_storage_supply_water_differential_pressure_integral_time_setpoint"},{"tag":"thermal_energy_storage_discharge_water_differential_pressure_integral_time_setpoint"},{"tag":"dehumidification_integral_time_setpoint"},{"tag":"static_pressure_integral_time_setpoint"},{"tag":"exhaust_air_flow_integral_time_setpoint"},{"tag":"exhaust_air_stack_flow_integral_time_setpoint"},{"tag":"discharge_air_heating_integral_time_setpoint"},{"tag":"luminance_setpoint"},{"tag":"co2_setpoint"},{"tag":"return_air_co2_setpoint"},{"tag":"max_return_air_co2_setpoint"},{"tag":"co2_differential_setpoint"},{"tag":"dehumidification_setpoint"},{"tag":"demand_setpoint"},{"tag":"heating_request_percent_setpoint"},{"tag":"discharge_air_flow_demand_setpoint"},{"tag":"cooling_demand_setpoint"},{"tag":"preheat_demand_setpoint"},{"tag":"supply_air_flow_demand_setpoint"},{"tag":"heating_request_setpoint"},{"tag":"cooling_request_percent_setpoint"},{"tag":"cooling_request_setpoint"},{"tag":"heating_demand_setpoint"},{"tag":"dew_point_setpoint"},{"tag":"economizer_dewpoint_setpoint"},{"tag":"economizer_disable_fixed_dewpoint_setpoint"},{"tag":"economizer_enable_fixed_dewpoint_setpoint"},{"tag":"load_setpoint"},{"tag":"max_load_setpoint"},{"tag":"chiller_max_load_setpoint"},{"tag":"mode_setpoint"},{"tag":"unoccupied_mode_setpoint"},{"tag":"dual_band_mode_setpoint"},{"tag":"proportional_gain_setpoint"},{"tag":"reset_setpoint"},{"tag":"temperature_low_reset_setpoint"},{"tag":"outside_air_temperature_low_reset_setpoint"},{"tag":"hot_water_supply_temperature_low_reset_setpoint"},{"tag":"medium_temperature_hot_water_supply_temperature_low_reset_setpoint"},{"tag":"discharge_air_flow_reset_setpoint"},{"tag":"discharge_air_flow_reset_low_setpoint"},{"tag":"discharge_air_flow_reset_high_setpoint"},{"tag":"temperature_high_reset_setpoint"},{"tag":"hot_water_supply_temperature_high_reset_setpoint"},{"tag":"medium_temperature_hot_water_supply_temperature_high_reset_setpoint"},{"tag":"outside_air_temperature_high_reset_setpoint"},{"tag":"temperature_differential_reset_setpoint"},{"tag":"flow_setpoint"},{"tag":"increase_decrease_step_setpoint"},{"tag":"speed_setpoint"},{"tag":"differential_speed_setpoint"},{"tag":"return_fan_differential_speed_setpoint"},{"tag":"return_supply_fan_differential_speed_setpoint"},{"tag":"return_discharge_fan_differential_speed_setpoint"},{"tag":"fan_speed_setpoint"},{"tag":"cooling_tower_fan_speed_setpoint"},{"tag":"air_flow_setpoint"},{"tag":"outside_min_air_flow_setpoint"},{"tag":"fan_air_flow_setpoint"},{"tag":"exhaust_fan_air_flow_setpoint"},{"tag":"booster_fan_air_flow_setpoint"},{"tag":"supply_air_flow_setpoint"},{"tag":"cooling_max_supply_air_flow_setpoint"},{"tag":"occupied_cooling_max_supply_air_flow_setpoint"},{"tag":"heating_supply_air_flow_setpoint"},{"tag":"occupied_heating_supply_air_flow_setpoint"},{"tag":"occupied_heating_max_supply_air_flow_setpoint"},{"tag":"occupied_heating_min_supply_air_flow_setpoint"},{"tag":"heating_max_supply_air_flow_setpoint"},{"tag":"heating_min_supply_air_flow_setpoint"},{"tag":"occupied_cooling_supply_air_flow_setpoint"},{"tag":"occupied_cooling_min_supply_air_flow_setpoint"},{"tag":"unoccupied_cooling_supply_air_flow_setpoint"},{"tag":"unoccupied_cooling_min_supply_air_flow_setpoint"},{"tag":"cooling_min_supply_air_flow_setpoint"},{"tag":"economizer_outside_air_flow_setpoint"},{"tag":"exhaust_air_flow_setpoint"},{"tag":"exhaust_air_stack_flow_setpoint"},{"tag":"discharge_air_flow_setpoint"},{"tag":"heating_discharge_air_flow_setpoint"},{"tag":"heating_min_discharge_air_flow_setpoint"},{"tag":"occupied_heating_min_discharge_air_flow_setpoint"},{"tag":"occupied_heating_discharge_air_flow_setpoint"},{"tag":"occupied_heating_max_discharge_air_flow_setpoint"},{"tag":"heating_max_discharge_air_flow_setpoint"},{"tag":"cooling_discharge_air_flow_setpoint"},{"tag":"cooling_min_discharge_air_flow_setpoint"},{"tag":"unoccupied_cooling_min_discharge_air_flow_setpoint"},{"tag":"occupied_cooling_min_discharge_air_flow_setpoint"},{"tag":"occupied_cooling_discharge_air_flow_setpoint"},{"tag":"occupied_cooling_max_discharge_air_flow_setpoint"},{"tag":"cooling_max_discharge_air_flow_setpoint"},{"tag":"unoccupied_cooling_discharge_air_flow_setpoint"},{"tag":"ventilation_air_flow_ratio_limit_setpoint"},{"tag":"vfd_speed_setpoint"},{"tag":"supply_fan_vfd_speed_setpoint"},{"tag":"return_fan_vfd_speed_setpoint"},{"tag":"max_vfd_speed_setpoint"},{"tag":"discharge_fan_vfd_speed_setpoint"},{"tag":"min_vfd_speed_setpoint"},{"tag":"acceleration_time_setpoint"},{"tag":"medium_temperature_water_discharge_temperature_sensor"},{"tag":"discharge_water_temperature_sensor"},{"tag":"discharge_water_flow_sensor"},{"tag":"discharge_air_flow_demand_sensor"},{"tag":"medium_temperature_water_supply_temperature_load_shed_status"},{"tag":"supply_air_cooling_dead_band_setpoint"},{"tag":"supply_air_heating_dead_band_setpoint"},{"tag":"discharge_water_temperature_dead_band_setpoint"},{"tag":"discharge_water_differential_pressure_dead_band_setpoint"},{"tag":"supply_air_heating_proportional_band_setpoint"},{"tag":"supply_air_cooling_proportional_band_setpoint"},{"tag":"discharge_water_differential_pressure_proportional_band_setpoint"},{"tag":"discharge_water_temperature_proportional_band_setpoint"},{"tag":"hot_water_discharge_temperature_setpoint"},{"tag":"load_shed_discharge_water_temperature_setpoint"},{"tag":"supply_air_cooling_integral_time_setpoint"},{"tag":"discharge_water_temperature_integral_time_setpoint"},{"tag":"discharge_water_differential_pressure_integral_time_setpoint"},{"tag":"supply_air_heating_integral_time_setpoint"},{"tag":"hot_water_discharge_temperature_low_reset_setpoint"},{"tag":"supply_air_flow_reset_setpoint"},{"tag":"supply_air_flow_reset_low_setpoint"},{"tag":"supply_air_flow_reset_high_setpoint"},{"tag":"hot_water_discharge_temperature_high_reset_setpoint"},{"tag":"cooling_supply_air_flow_setpoint"},{"tag":"heating_cooling_status"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"steam_temperature_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"steam_temperature_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"steam_temperature_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"steam_temperature_sensor"},{"tag":"heating_cooling_status"},{"tag":"max_air_flow_sensor"},{"tag":"valve_position_sensor"},{"tag":"chilled_water_temperature_sensor"},{"tag":"steam_temperature_sensor"}];
export const GETTING_STARTED = "GETTING_STARTED";
export const LICENSE = "LICENSE";
export const DATA_AGREEMENT = "DATA_AGREEMENT";
export const BLOG = "BLOG";
