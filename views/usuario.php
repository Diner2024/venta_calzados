<div class="container mt-5">
    <h2 class="mb-4">Formulario de usuario</h2>
    <form id="frmRegistrar">
        <div class="mb-3">
            <label for="numeroIdentidad" class="form-label">NUMERO_IDENTIDAD</label>
            <input type="text" class="form-control" id="numeroIdentidad" name="numeroIdentidad" maxlength="20" required>
        </div>
        <div class="mb-3">
            <label for="razonSocial" class="form-label">RAZON_SOCIAL</label>
            <input type="text" class="form-control" id="razonSocial" name="razonSocial" maxlength="30" required>
        </div>
        <div class="mb-3">
            <label for="telefono" class="form-label">TELEFONO</label>
            <input type="tel" class="form-control" id="telefono" name="telefono" maxlength="15">
        </div>
        <div class="mb-3">
            <label for="correo" class="form-label">CORREO</label>
            <input type="email" class="form-control" id="correo" name="correo" required>
        </div>
        <div class="mb-3">
            <label for="departamento" class="form-label">DEPARTAMENTO</label>
            <input type="text" class="form-control" id="departamento" name="departamento" required>
        </div>
        <div class="mb-3">
            <label for="provincia" class="form-label">PROVINCIA</label>
            <input type="text" class="form-control" id="provincia" name="provincia" required>
        </div>
        <div class="mb-3">
            <label for="distrito" class="form-label">DISTRITO</label>
            <input type="text" class="form-control" id="distrito" name="distrito" required>
        </div>
        <div class="mb-3">
            <label for="codPostal" class="form-label">COD_POSTAL</label>
            <input type="text" class="form-control" id="codPostal" name="codPostal" maxlength="10" required>
        </div>
        <div class="mb-3">
            <label for="direccion" class="form-label">DIRECCION</label>
            <input type="text" class="form-control" id="direccion" name="direccion" maxlength="100" required>
        </div>
        <div class="mb-3">
            <label for="rol" class="form-label">ROL</label>
            <input type="text" class="form-control" id="rol" name="rol" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">PASSWORD</label>
            <input type="password" class="form-control" id="password" name="password" required>
        </div>
        <div class="mb-3">
            <label for="estado" class="form-label">ESTADO</label>
            <input type="text" class="form-control" id="estado" name="estado" required>
        </div>
        <div class="mb-3">
            <label for="fechaReg" class="form-label">FECHA_REG</label>
            <input type="date" class="form-control" id="fechaReg" name="fechaReg" required>
        </div>
        
        <button type="button" class="btn btn-success col-6 mx-2" onclick="registrarProducto();">Enviar</button>
    </form>
</div>
<script src="<?php BASE_URL;?>views/js/functions_producto.js"></script>
<script>listar_categoria();</script>
<script>listar_personas();</script>