import styles from './scss/Activities.module.scss';

export const Activities = () => {
	const datos = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
	];

	return (
		<div className={styles.activitiesContent}>
			<article>
				<h3>Actividades</h3>
				<p style={{ color: 'gray', fontSize: '0.9rem' }}>Ultimas actividades de tu cuenta</p>
			</article>
			<div className={styles.tableContent}>
				<table>
					<thead>
						<tr>
							<th>Dispositivo</th>
							<th>IP Address</th>
							<th>Fecha</th>
							<th>Tipo</th>
							<th>Descripci&oacute;n</th>
						</tr>
					</thead>
					<tbody>
						{datos.map((item) => (
							<tr key={item.id}>
								<td>Chrome - Linux Desktop</td>
								<td>192.168.1.209</td>
								<td>July-25-2022 1:34 AM</td>
								<td>LOGIN</td>
								<td>Intento de inicio de Sesión exitodoestupednso adhasdasdgasfdg asdhasdgasdf adsasdasdgfy</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

		</div>
	);
}