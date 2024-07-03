curso_rapido = 2.5
curso_lento = 7
curso_promedio = 4
curso_actual = 1.5

dif_c_rapido = curso_rapido - curso_actual
dif_porcent = (dif_c_rapido / max(curso_rapido, curso_actual)) * 100
print('La diferencia en porcentaje del curso actual con el curso rapido es del',dif_porcent,'% ')

dif_c_lento = curso_rapido - curso_actual
dif_porcent = (dif_c_lento / max(curso_lento, curso_actual)) * 100
print('La diferencia en porcentaje del curso actual con el curso lento es del',dif_porcent,'% ')

dif_c_promedio = curso_rapido - curso_actual
dif_porcent = (dif_c_promedio / max(curso_promedio, curso_actual)) * 100
print('La diferencia en porcentaje del curso actual con el curso promedio es del',dif_porcent,'% ')

curso = 5
curso_final = 4

curso_actual = 3.5
curso_actual_final = 2.5

material_inservible = curso - curso_final
material_primer_curso = material_inservible / max(curso,curso_final) * 100
print('El porcentaje de material inservible del curso promedio es del',material_primer_curso,'%')

material_inservible_actual = curso_actual - curso_actual_final
material_actual_curso = material_inservible_actual / max(curso_actual,curso_actual_final) * 100
print('El porcentaje de material inservible del curso actual es del',material_actual_curso,'%')