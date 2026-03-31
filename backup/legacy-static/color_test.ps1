Add-Type -AssemblyName System.Drawing
try {
    $path = "d:\NYMBLOC\assets\logo-header.png"
    if (-Not (Test-Path $path)) {
        Write-Output "File not found"
        exit
    }
    $img = [System.Drawing.Image]::FromFile($path)
    $bmp = new-object System.Drawing.Bitmap($img)
    $colors = @{}
    for ($x = 0; $x -lt $bmp.Width; $x += 10) {
        for ($y = 0; $y -lt $bmp.Height; $y += 10) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.A -gt 50) {
                $r = [int]([math]::Floor($pixel.R / 20) * 20)
                $g = [int]([math]::Floor($pixel.G / 20) * 20)
                $b = [int]([math]::Floor($pixel.B / 20) * 20)
                $hex = "#{0:X2}{1:X2}{2:X2}" -f $r, $g, $b
                if ($colors.ContainsKey($hex)) {
                    $colors[$hex]++
                } else {
                    $colors[$hex] = 1
                }
            }
        }
    }
    $colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 5 | ForEach-Object {
        Write-Output "$($_.Name): $($_.Value)"
    }
} catch {
    Write-Output "Error: $_"
}
